import React from 'react'

const CreateTask = () => {
  return (
      
      <div className='max-w-4xl mx-auto bg-black rounded-xl shadow-lg p-8 mt-6'>
        <h2 className='text-2xl font-bold text-white mb-8'>Create New Task</h2>
        
        <form className='space-y-6'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-sm font-semibold text-white'>Task Title</h3>
            <input 
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
              type="text" 
              placeholder='Make a UI Design' 
            />
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='text-sm font-semibold text-white'>Description</h3>
            <textarea 
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none' 
              name="" 
              id="" 
              cols='30' 
              rows='6'
              placeholder='Describe the task in detail...'
            ></textarea>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-semibold text-white'>Date</h3>
              <input 
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                type="date" 
              />
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-semibold text-white'>Assign To</h3>
              <input 
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                type="text" 
                placeholder='Employee Name' 
              />
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-semibold text-white'>Category</h3>
              <input 
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                type="text" 
                placeholder='Design, Dev, etc' 
              />
            </div>
          </div>
          
          <div className='pt-4'>
            <button 
              className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg'
              type='button'
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask