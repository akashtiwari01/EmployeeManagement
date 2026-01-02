import React from 'react'

const Header = () => {
  return (
    <div className='text-white flex items-end justify-between mr-3 ml-10 mt-2'>  
        <h1 className='text-2xl '>Hello <br/> <span className='text-4xl'>Akash 🦁</span> </h1>
        <button className='border-none outline-none px-3 py-1 rounded-full bg-red-600'>Log Out</button>
    </div>
  )
}

export default Header