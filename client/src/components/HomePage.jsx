import React, { useState } from 'react'
import TodoList from './TodoList';
import { useDispatch } from "react-redux";
import { postTodo } from '../redux/actions/todoActions';

const HomePage = () => {

    const [todo,setTodo] = useState('');
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');


    const dispatch = useDispatch();

    

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(todo.length === 0){
            console.log("Todo is required.")
        }
        if(todo){
            setTodo('');
            setError('');
            dispatch(postTodo(todo));
        }
    }

  return (
    <>

        <div>
            <div className="max-w-3xl mx-auto  my-5 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold text-center text-[#ff4757] mb-2 ">Todo App</h1>

                <div className="w-full px-4 mt-3 mb-7">
                   {error && ( <p className='text-center mb-2 text-[#ff4757]'>{error}</p> )}
                   {success && ( <p className='text-center text-[#287e5a]'>{success}</p> )}

                    <form className="flex gap-x-2">
                        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" className='outline-none border-2 border-gray-300 w-full p-2' />
                        <button onClick={handleSubmit} className='bg-blue-500 text-white p-2 rounded-sm shadow-md transition-all duration-100'>
                            Update
                        </button>
                    </form>
                </div>

                <TodoList />

            </div>
            

        </div>


    </>
  )
}

export default HomePage;