import React from 'react'
import "../Styles/Home.css"
import SideBar from './SideBar'
import TaskBar from './TaskBar'

function Home() {
    return (
        <div className='home_container'>

            <div className='home_sideBar_container'>
    
                <SideBar/>

            </div>

            <div className='home_task_container  grid_three_column'>

                 <TaskBar/>

            </div>



        </div>
    )
}

export default Home
