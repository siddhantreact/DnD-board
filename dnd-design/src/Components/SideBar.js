import React, { useState } from 'react'
import { addClickedUser } from "../Redux/Reducer"

import { useDispatch, useSelector } from 'react-redux'

import "../Styles/Sidebar.css"
import { Typography } from '@mui/material'


function SideBar() {




  const dispatch = useDispatch()

  const users = useSelector((state) => {

    return state.assignee.users

  })




  return (
    <div className='sidebar_container'>






      <h2>ASSIGNEES</h2>


      {

        users?.map((e) => {

          return (

            <h5 onClick={() => {



              dispatch(addClickedUser(e))

            }}>{e}</h5>
          )

        }

        )

      }





    </div>








  )



}

export default SideBar






