import React from 'react'
import Header from '../other/header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashBoard = () => {
  return (
    <div className='min-h-screen w-full p-0'>
      <Header/>
      <CreateTask/> 
      <AllTask/>
    </div>
  )
}

export default AdminDashBoard