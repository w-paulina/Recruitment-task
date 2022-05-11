import React from 'react'

function Users({users, showUser, removeUser}) {
    return <div>
        {users.map((user,index) => (
        <div className='users-item' key={index}>
        <div className='user-info' key={user.id}>
            {user.name} {user.surname}
        </div>
        <button className='user-button' onClick={() => {showUser({
            id: user.id, 
            name: user.name, 
            surname: user.surname, 
            age: user.age,
            position: user.position})}}>Więcej</button>
        <button className='user-button' onClick={() => {removeUser(user.id)}}>Usuń</button>
        </div>
  ))}
  
  </div>
}

export default Users