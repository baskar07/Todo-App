import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import { useDispatch,useSelector } from "react-redux";
import { postTodo, getTodos } from '../redux/actions/todoActions';

const HomePage = () => {

  

  const { isLoading,todos,error,isLoadingPost,successPost,errorPost } = useSelector((state) => state.todos);
    
  const dispatch = useDispatch();

  const [todo, setTodo] = useState('');
  const [validationError, setValidationError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');



    const handleSubmit = (e) =>{
        e.preventDefault();
        if(todo.length === 0){
            setValidationError("Todo is required");
        }
        if(todo){
        setTodo('');
        setValidationError('');    
        dispatch(postTodo({todo}));
        }
     
    }

    useEffect(()=>{
        if(successPost){
            setSuccessMessage(successPost.message)
        }else if(errorPost){
            setValidationError(errorPost.message)
        }
    },[successPost,errorPost])

    useEffect(()=>{
        dispatch(getTodos);
        setTimeout(() => {
            setSuccessMessage('');
            setValidationError('');
        }, 5000);
    },[dispatch,isLoadingPost,successMessage,validationError])


  return (
    <>

        <div>
            <div className="max-w-3xl mx-auto  my-5 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold text-center text-[#ff4757] mb-2 ">Todo App</h1>

                <div className="w-full px-4 mt-3 mb-7">
                   {validationError &&( <p className='text-center mb-2 text-[#ff4757]'>{validationError}</p> )}
                   {successMessage && ( <p className='text-center mb-3 text-[#287e5a]'>{successMessage}</p> )}

                    <form className="flex gap-x-2">
                        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" className='outline-none border-2 border-gray-300 w-full p-2' />
                        <button onClick={handleSubmit}  className='bg-blue-500 text-white p-2 rounded-sm shadow-md transition-all duration-100'>
                            Update
                        </button>
                    </form>
                </div>

               
            { todos.length === 0 ? (
                <h2 className='text-black text-lg'>Sorry! No Todos Found.</h2> 
            ) : (
                todos.todos?.map(item =>{
                    return(
                        <TodoList key={item._id} task={item} />
                    )
                })
            )}


            </div>
        </div>


    </>
  )
}

export default HomePage;