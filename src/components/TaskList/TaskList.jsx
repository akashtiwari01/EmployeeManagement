import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className="h-[55%] flex items-center gap-3 flex-nowrap w-full py-5 mt-10 overflow-x-auto">
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-purple-700 rounded-2xl">
        <div className='flex justify-between p-5 items-center'>
          <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold '>Make a YouTube Video</h2>
        <p  className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae cupiditate dicta delectus nostrum? In?</p>
      </div>

       <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-2xl">
        <div className='flex justify-between p-5 items-center'>
          <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold '>Make a YouTube Video</h2>
        <p  className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae cupiditate dicta delectus nostrum? In?</p>
      </div>

       <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-600 rounded-2xl">
        <div className='flex justify-between p-5 items-center'>
          <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold '>Make a YouTube Video</h2>
        <p  className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae cupiditate dicta delectus nostrum? In?</p>
      </div>

       <div className="flex-shrink-0 h-full w-[300px] p-5 bg-pink-400 rounded-2xl">
        <div className='flex justify-between p-5 items-center'>
          <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold '>Make a YouTube Video</h2>
        <p  className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae cupiditate dicta delectus nostrum? In?</p>
      </div>

      
    </div>
  )
}

export default TaskList 