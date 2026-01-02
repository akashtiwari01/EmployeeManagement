import React from 'react'
import Header from '../other/header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
 
const EmployeeDashBoard = () => {
  return (
    <div className='p-5 bg-[#1C1C1C] h-screen '>
       <Header/>
       <TaskListNumber/>
       <TaskList/>
    </div>
  )
}

export default EmployeeDashBoard