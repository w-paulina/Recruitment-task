import React, { useState } from 'react'
import UserForm from './UserForm.js'
import Users from './Users.js'

function UserList() {
    const [users, setUsers] = useState([])
    const initialValues = {id: "", name: "", surname: "", age: "", position: ""};
    const [currentUser, setcurrentUser] = useState(initialValues)

    const addUser = user => {
        if(!user.name || !user.surname || !user.age){
        return;
        }
        const newUsers = [user, ...users]
        setUsers(newUsers);
    }

    const showUser = (userId) => {
        const userInfo = [...users].filter(user => user.id = userId.id)
        setcurrentUser(userInfo[0]);
    }

    const removeUser = (userId) => {
        const removeArr = [...users].filter(user => user.id !== userId)
        setUsers(removeArr);
    }

  return (
    <div className='container'> 
    <h1>Dodaj użytkownika</h1>
    <UserForm onSubmit={addUser}/>
    <div className='users-list'>
        <Users users={users} showUser={showUser} removeUser={removeUser}/>
        <div>Szczegółowe informacje:
            <div className='user-name'>{currentUser.name} {currentUser.surname}</div>
            <div>Wiek: {currentUser.age}</div>
            <div>Stanowisko: {currentUser.position}</div>
        </div>
    </div>
    </div>
  )
}

export default UserList