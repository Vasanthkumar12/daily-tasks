import React, { useState } from 'react'
import { Avatar } from './Avatar'
import { UserInfo } from './UserInfo'

export const UserProfile = ({name}) => {
    const [userInfo, setUserInfo] = useState({ uname: name, email: '', bio: '', imageUrl: '' })
    
    const updateUserField = (e) => {
        const {field_name, value} = e.target
        setUserInfo({...userInfo, [field_name]: value})
    }

    const setUser = (e) => {
        e.preventDefault()
        console.log(userInfo, 'userInfo')
    }

    return (
    <div>
        <h1>User Profile</h1>
        <div style={{border: '1px solid black', display: 'inline-block'}}>
            <form>
                <input onChange={updateUserField} style={{margin: '10px'}} name="email" type="email" placeholder='enter email' /><br />
                <input onChange={updateUserField} style={{margin: '10px'}} name="bio" type="date" placeholder='Choose date of birth' /><br />
                <input onChange={updateUserField} style={{margin: '10px'}} name="imageUrl" type="file" placeholder='choose your profile image'/><br />
                <button onClick= {setUser} style={{margin: '10px', marginLeft: '100px'}}>Set User</button>
            </form>
        </div>
        <Avatar />
        <UserInfo />
    </div>
  )
}
