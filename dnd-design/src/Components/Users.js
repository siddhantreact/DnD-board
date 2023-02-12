import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from "../Redux/Reducer"
import "../Styles/User.css"

import { People} from "@mui/icons-material"
import { IconButton } from '@mui/material'
import { priority } from '../Redux/Reducer'

function Users() {

  const dispatch = useDispatch()

  const [user, setUser] = useState()

 

  return (
    <div className='add_users'>

      <input type={"text"} className="input_name" placeholder='create user' onChange={(e) => {

        setUser(e.target.value)

      }} />




      <IconButton onClick={() => {
        dispatch(addUsers(user))

      }}>

        <People/>

      </IconButton>


       
       <button className='btn_high'   value={"high"}  onClick={()=>{
            
            
        
          console.log(document.querySelector(".btn_high").value)

          dispatch(priority(document.querySelector(".btn_high").value))

       }} >high priority task</button>
       
       <button className='btn_low'   value={"low"}  onClick={()=>{
            
            
              console.log(document.querySelector(".btn_low").innerHTML)
              dispatch(priority(document.querySelector(".btn_low").innerHTML))
          
  
         }} >low priority task</button>
       

     


    </div>
  )
}

export default Users
