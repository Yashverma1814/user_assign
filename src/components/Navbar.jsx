import React, { useState } from 'react'
import { Users } from './Users'
import axios from 'axios';

export const Navbar = () => {

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);

    const fetchData = async() =>{
        try {
            const data = await axios.get(`https://reqres.in/api/users?page=1`)
                .then(res=>{
                    setUsers(res.data.data)
                    console.log(res.data.data)
                })
        } catch (error) {
            console.log(error)
        }
    }
    const onClickHandler = () =>{
        setLoading(true)
        fetchData();
        setLoading(false)
    }

  return (
    <div>
        <div className="brand">
            DataGetter
            <div className='getButton'>
                <button className='getUsersButton' onClick={onClickHandler}>Get Users</button>
            </div>
        </div>
        {loading===true?<h1 style={{textAlign:'center'}}>Loading....</h1>:<Users allUsersData={users} />}
    </div>
  )
    
}
