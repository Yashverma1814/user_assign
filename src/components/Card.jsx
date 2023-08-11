import React from 'react'

export const Card = ({user}) => {
  return (
    <div className='cardHead'>
        <div>
            <img src={user.avatar} alt="" />
            <div className="userName">Name :- {user.first_name+' ' + user.last_name}</div>
            <div>Email :- {user.email}</div>
        </div>
    </div>
  )
}
