import React from 'react'

const AllTask = () => {
    return (
        <div  id='tasklist'className='bg-[#1C1C1C] p-4 mt-5 rounded   h-48 overflow-auto'>
            <div className='bg-red-400 mb-2 px-4 py-2  flex justify-between  rounded'>
                <h2>Akash</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div>

            <div className='bg-green-400 mb-2 px-4 py-2  flex justify-between  rounded'>
                <h2>Akash</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div>

            <div className='bg-purple-400  mb-2 px-4 py-2  flex justify-between  rounded'>
                <h2>Akash</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div>

            <div className='bg-pink-400 px-4  mb-2 py-2  flex justify-between  rounded'>
                <h2>Akash</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div>
        </div>
    )
}

export default AllTask