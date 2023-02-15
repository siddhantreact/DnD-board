import React, { useEffect, useState } from 'react'
import "../Styles/TaskBar.css"
import Todo from './Todo'

import { useDispatch, useSelector } from 'react-redux'
import { addItemsToProgress, addItemsToComplete, removeItemFromTodo, removeItemFromProgress, addtickects, removeItemFromComplete } from "../Redux/Reducer"
function TaskBar() {

    const dispatch = useDispatch()


    const [progressFil, setProgressFil] = useState()

    const [completeFil, setCompleteFil] = useState()




    const itemsInProgress = useSelector((state) => {
        return state.assignee.progress
    })





    const itemsInComplete = useSelector((state) => {
        return state.assignee.complete
    })



    var clickedNamesData = useSelector((state) => {


        return state.assignee.clickedUserName

    })



    const selectedPriority = useSelector((state) => {

        return state.assignee.priority

    })





    useEffect(() => {


        const progressDataRef = itemsInProgress.filter((e) => {

            return e.name == clickedNamesData[clickedNamesData.length - 1]

        })



        if (selectedPriority[selectedPriority.length - 1] == "low") {


            //low to high

            setProgressFil(progressDataRef.map((e) => e).sort((a, b) => (a.pty < b.pty) ? 1 : -1))


        }

        else if (selectedPriority[selectedPriority.length - 1] == "high") {

            //high to low
            setProgressFil(progressDataRef.map((e) => e).sort((a, b) => (a.pty < b.pty) ? -1 : 1))

        }

        else {

            setProgressFil(progressDataRef)
        }




        //    setProgressFil(progressDataRef)




    }, [clickedNamesData, itemsInProgress, selectedPriority])





    useEffect(() => {

        const completeDataRef = itemsInComplete.filter((e) => {

            return e.name == clickedNamesData[clickedNamesData.length - 1]

        })








        if (selectedPriority[selectedPriority.length - 1] == "low") {



            setCompleteFil(completeDataRef.map((e) => e).sort((a, b) => (a.pty < b.pty) ? 1 : -1))



        }

        else if (selectedPriority[selectedPriority.length - 1] == "high") {

            setCompleteFil(completeDataRef.map((e) => e).sort((a, b) => (a.pty < b.pty) ? -1 : 1))
        }

        else {
            setCompleteFil(completeDataRef)

        }






        //   setCompleteFil(completeDataRef)

    }, [clickedNamesData, itemsInComplete, selectedPriority])






    return (
        <div className='task_container  grid  grid_three_column'>


            <div className='task_status_1' onDragOver={(e) => e.preventDefault()} onDrop={(event) => {




                console.log("from todo")

                dispatch(removeItemFromProgress(event.dataTransfer.getData("dataFromProgressTask")))


                dispatch(addtickects({

                    name: event.dataTransfer.getData("dataFromProgressName"),
                    task: event.dataTransfer.getData("dataFromProgressTask")

                }))



            }}>

                <h2>TO DO</h2>

                <Todo />

            </div>





            <div className='task_status_2' onDragOver={(e) => {

                e.preventDefault()

                console.log("drag over triggered")

            }} onDrop={(e) => {


                console.log("on drop triggered")






                dispatch(addItemsToProgress({

                    name: e.dataTransfer.getData("dataFromTodoName"),
                    task: e.dataTransfer.getData("dataFromTodoTask"),
                    pty: e.dataTransfer.getData("dataFromTodoPriority")


                }))



                //======> dispatch splice action on todo data
                // dispatch(removeItemFromTodo(e.dataTransfer.getData("dataFromTodo")))

                dispatch(removeItemFromTodo(e.dataTransfer.getData("dataFromTodoTask")))


                dispatch(addItemsToProgress({

                    name: e.dataTransfer.getData("revName"),
                    task: e.dataTransfer.getData("revTask"),
                    pty: e.dataTransfer.getData("revPty"),

                }))


                dispatch(removeItemFromComplete(e.dataTransfer.getData("revTask")))

            }}>




                <h2>IN PROGRESS</h2>
                {/* 
                //apply filters */}

                {
                    progressFil?.map((e) => {

                        return (
                            <div className='task_details_container'>
                                <h4 className='progress' draggable onDragStart={(event) => {

                                    console.log("dragging start from progress")

                                    // event.dataTransfer.setData("dataFromProgress", e)

                                    event.dataTransfer.setData("dataFromProgressName", e.name)
                                    event.dataTransfer.setData("dataFromProgressTask", e.task)
                                    event.dataTransfer.setData("dataFromProgressPriority", e.pty)

                                }} > {e.task}</h4>

                                
                                    <h6>priority:{e.pty}</h6>
                               
                            </div>
                        )

                    })
                }


                {/* !!!  object*/}

            </div>









            <div className='task_status_3' onDragOver={(e) => {

                e.preventDefault()
                console.log("on drag over started")

            }} onDrop={(e) => {

                console.log("on drop triggered in complete")

                // dispatch(addItemsToComplete(e.dataTransfer.getData("dataFromProgress")))

                dispatch(addItemsToComplete({

                    name: e.dataTransfer.getData("dataFromProgressName"),
                    task: e.dataTransfer.getData("dataFromProgressTask"),
                    pty: e.dataTransfer.getData("dataFromProgressPriority")

                }))



                dispatch(removeItemFromProgress(e.dataTransfer.getData("dataFromProgressTask")))




            }}>

                <h2 >COMPLETE</h2>
   

                {


                    completeFil?.map((e) => {


                        return (

                            <div className='complete_container'>

                                <h4 className='complete' draggable onDragStart={(event) => {


                                    //  event.dataTransfer.setData("rev" , e)

                                    event.dataTransfer.setData("revName", e.name)
                                    event.dataTransfer.setData("revTask", e.task)
                                    event.dataTransfer.setData("revPty", e.pty)

                                }}>{e.task}</h4>

                               
                                <h6>priority:{e.pty}</h6>

                            </div>
                        )
                    })
                }





            </div>


        </div>
    )
}

export default TaskBar
