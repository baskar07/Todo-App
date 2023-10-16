import React from 'react';
import { FaEdit, FaCheck } from 'react-icons/fa';
import { FiTrash } from 'react-icons/fi';

const TodoList = ({isLoading,error,task}) => {
  return (
    <div className='w-full px-4 flex flex-col items-center mt-4' >

            {isLoading && ( <p className='text-center mb-3 text-[#287e5a]'>Loading...</p> )}
            {error && ( <p className='text-center mb-2 text-[#ff4757]'>{error}</p> )}


        <div className="bg-gray-100 flex items-center gap-x-4 p-3 w-full">

            <FaCheck />

            <p className="flex-1 cursor-pointer">
                <span className=''>{task.todo}</span>
            </p>

            <button>
                <FaEdit className='h-5 w-auto' color='#00abbd'/>
            </button>

            <button>
                <FiTrash className='h-5 w-auto' color='#ff4757' />
            </button>

        </div>
    </div>
  )
}

export default TodoList