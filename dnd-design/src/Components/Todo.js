import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "../Styles/Todo.css"


import { addtickects, updateTickectWithPriority } from '../Redux/Reducer'


import { Add, Delete, Task } from "@mui/icons-material"
import { IconButton } from '@mui/material'
import { deleteFromTodo } from '../Redux/Reducer'




function Todo() {

    const input = useRef()


    const [data, setdata] = useState()



    const [tickects, setTickects] = useState()

  




    const dispatch = useDispatch()




    var clickedUser = useSelector((state) => {


        return state.assignee.clickedUserName
    })




    var taskDetails = useSelector((state) => {


        return state.assignee.tickects
    })




    var clickedNamesData = useSelector((state) => {


        return state.assignee.clickedUserName

    })




    useEffect(() => {

        const data = taskDetails.filter((e) => {

            return e.name == clickedNamesData[clickedNamesData.length - 1]

        })

        setdata(data)

    }, [taskDetails, clickedNamesData])


    //condition
    //current user







    return (
        <div className='todo_container'>


            {(clickedUser.length == 0) ? "" :

                <div>

                    <input className='input_todo' placeholder='ADD TICKECTS' onChange={(e) => {

                        setTickects(e.target.value)


                    }} />




                    <IconButton onClick={() => {

                        dispatch(addtickects({


                            name: clickedNamesData[clickedNamesData.length - 1],
                            task: tickects,
                         

                        }))
                    }}>

                        <Task />

                    </IconButton>

{/* //!!! */}




                    {/* !!!!!!!!! filter*/}







                    {



                        data?.map((e) => {

                            return (
                                <>
                                    <h4 className='todo' draggable onDragStart={(event) => {

                                        console.log("dragging start")

                                        //   event.dataTransfer.setData("dataFromTodo" , e?.task)

                                        event.dataTransfer.setData("dataFromTodoName",

                                            e.name


                                        )

                                        event.dataTransfer.setData("dataFromTodoTask",


                                            e.task

                                        )

                                        event.dataTransfer.setData("dataFromTodoPriority",


                                            e.pty

                                        )



                                    }}    >{e?.task}</h4>

                                    <Delete onClick={() => {


                                        dispatch(deleteFromTodo(e.task))

                                    }} />

                                    <select className='select_input' ref={input} onClick={() => {


                                        console.log(input.current.value)
                                      
                                        

                                        dispatch(updateTickectWithPriority({
                                             name:e.name,
                                             task:e.task,
                                             pty:input.current.value

                                        }))

                                    }}>

                                        <option value={"1"}>1</option>
                                        <option value={"2"}>2</option>
                                        <option value={"3"}>3</option>

                                    </select>


                                </>
                            )
                        })



                    }







                </div>}












        </div>
    )
}

export default Todo
