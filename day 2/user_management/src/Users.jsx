import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Users = () => {
    const [user, setUser] = useState({ firstName: '', lastName: '', id: '' })
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)
    const [isFiltering, setIsFiltering] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({ ...user, [name]: value })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        let data = { ...user, id: Date.now() }
        setUser(data)
        try {
            let res = await axios.post("https://states-c4c13-default-rtdb.firebaseio.com/users.json", data)
            console.log(res, 'res')
            setUser({ firstName: '', lastName: '' })
        }
        catch(err) {
            console.log(err.message)
        }
    }

    const fetchAllUsers = async () => {
        try {
            let result = await axios.get('https://states-c4c13-default-rtdb.firebaseio.com/users.json')
            let usersData = result.data? Object.values(result.data) : []
            setUsers(usersData)
        }
        catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllUsers()
    }, [user])


    const searchUser = (e) => {
        setIsFiltering(true)
        const value = e.target.value
        let arr = users.filter((user) => user.firstName.toLowerCase().startsWith(value.toLowerCase()))
        console.log(arr)
        setFilteredUsers(arr)
    }

    // update users
    const updateFields = (user) => {
        setUser(user)
        let flag = isUpdate ? isUpdate : true
        setIsUpdate(flag)
        console.log(user)
    }

    const findUser = async() => {
        let result = await axios.get('https://states-c4c13-default-rtdb.firebaseio.com/users.json')
        let userEntry = Object.entries(result.data).find(([key, value]) => value.id == user.id)
        return userEntry
    }

    const updateUser = async() => {
        
        try {
            let userEntry = await findUser()
            console.log(userEntry, 'userEntry')
            console.log(user)
            let upRes = await axios.patch(`https://states-c4c13-default-rtdb.firebaseio.com/users/${userEntry[0]}.json`, user)
            setUser({ firstName: '', lastName: '' })
            setIsUpdate(!isUpdate)
            upRes.status == 200 ? console.log("up Success") : console.log("upfailed")
        }
        catch(error) {
            console.log(error.message)
        }
    }

   
    const deleteUser = async() => {
        try{
            let userEntry =await findUser()
            await axios.delete(`https://states-c4c13-default-rtdb.firebaseio.com/users/${userEntry[0]}.json`)
            setUser({ firstName: '', lastName: '' })
            setIsUpdate(!isUpdate)
        }
        catch(error) {
            console.log(error)
        }
    }

    const cancel = () => {
        let data = { firstName: '', lastName: '' }
        setUser(data)
        let flag = data.firstName == '' && data.lastName == '' ? false : true
        setIsUpdate(flag)
    }

  return (
    <div>
        <div>
            <input style={{padding: '5px'}} onChange={searchUser} type="search" placeholder='Search' />
        </div>


        <div style={{display: 'flex'}}>
            <div style={{border: '1px solid black', padding: '10px', marginBottom: "20px", marginTop: "20px" }}>
                { isFiltering ? (filteredUsers.map((user) => (
                    <p onClick={() => updateFields(user)}>{user.firstName} {user.lastName}</p>
                ))) : (users.map((user) => (
                    <p onClick={() => updateFields(user)}>{user.firstName} {user.lastName}</p>
                )))}
            </div>

            <div style={{marginLeft: '30px', marginTop: "20px" }}>
                <div style={{marginBottom: '10px'}}>
                    <label htmlFor="firstName">First Name:</label><br />
                    <input onChange={handleChange} type="text" value={user.firstName} name='firstName' /><br />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label><br />
                    <input onChange={handleChange} type="text" value={user.lastName} name='lastName' />
                </div>
            </div>


        </div>

        <div style={{ display: "flex", justifyContent: 'space-around', width: '300px' }}>
            <button style={{padding: '5px'}} onClick={submitForm} disabled={isUpdate}>Create</button>
            <button style={{padding: '5px'}} onClick={updateUser} disabled={!isUpdate}>Update</button>
            <button style={{padding: '5px'}} onClick={deleteUser} disabled={!isUpdate}>Delete</button>
            <button style={{padding: '5px'}} onClick={cancel}>Cancel</button>
        </div>

    </div>
  )
}
