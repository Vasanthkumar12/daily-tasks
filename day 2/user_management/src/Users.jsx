import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Users = () => {
    const [user, setUser] = useState({ firstName: '', lastName: '' })
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({ ...user, [name]: value })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.post("https://states-c4c13-default-rtdb.firebaseio.com/users.json", user)
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
            setUsers(Object.values(result.data))
        }
        catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllUsers()
    }, [user])


    const searchUser = (e) => {
        console.log("youuuu")
        const value = e.target.value
        let arr = users.filter((user) => user.firstName.toLowerCase().includes(value.toLowerCase()))
        console.log(arr)
        setFilteredUsers(arr)
    }

  return (
    <div>
        <div>
            <input style={{padding: '5px'}} onChange={searchUser} type="search" placeholder='Search' />
        </div>


        <div style={{display: 'flex'}}>
            <div style={{border: '1px solid black', padding: '10px', marginBottom: "20px", marginTop: "20px" }}>
                { filteredUsers.length > 0 ? (filteredUsers.map((user) => (
                    <p>{user.firstName} {user.lastName}</p>
                ))) : (users.map((user) => (
                    <p>{user.firstName} {user.lastName}</p>
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
            <button style={{padding: '5px'}} onClick={submitForm}>Create</button>
            <button style={{padding: '5px'}}>Update</button>
            <button style={{padding: '5px'}}>Delete</button>
            <button style={{padding: '5px'}}>Cancel</button>
        </div>

    </div>
  )
}
