import React from 'react'
import { Card } from './Card'

export const Users = ({allUsersData}) => {




  return (
    <div>
        <div className="usersData">
            {allUsersData.map((user)=>{
                return(
                <Card user={user} />)
            })}
        </div>
    </div>
  )
}
