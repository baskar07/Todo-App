import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import { useDispatch,useSelector } from "react-redux";
import { postTodo, getTodos, updateTodo, deleteTodo } from '../redux/actions/todoActions';
import e from 'cors';

const HomePage = () => {

  

  const { isLoading,todos,error,isLoadingPost,successPost,errorPost, isLoadingUpdate, successUpdate,errorUpdate, isLoadingdelete,successdelete,errordelete } = useSelector((state) => state.todos);
    
  const dispatch = useDispatch();

  const [todo, setTodo] = useState('');
  const [validationError, setValidationError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [todoId,setTodoId]= useState('');
  const [isUpdate,setIsUpdate] = useState(false);


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

    const handleUpdate = (event) =>{
        event.preventDefault();
        if(todo){
            setTodo('');
            setValidationError('');  
        dispatch(updateTodo({todo,todoId}));
        }
        setIsUpdate(false);
    }

    useEffect(()=>{
        if(successPost){
            setSuccessMessage(successPost.message);
        }else if(errorPost){
            setValidationError(errorPost.message);
        } 
    },[successPost,errorPost])

    useEffect(()=>{
        if(successUpdate){
            setSuccessMessage(successUpdate.message);
        }else if(errorUpdate){
            setValidationError(errorUpdate.message);
        }
    },[successUpdate,errorUpdate])

    useEffect(()=>{
        if(successdelete){
            setSuccessMessage(successdelete.message);
        }else if(errordelete){
            setValidationError(errordelete.message);
        }
    },[successdelete,errordelete])

    useEffect(()=>{
        setTimeout(() => {
            setSuccessMessage('');
            setValidationError('');
        }, 3000);
        dispatch(getTodos);
    },[dispatch,isLoadingPost,isLoadingUpdate,isLoadingdelete,successMessage,validationError])

    const updateMode = (id,todo) =>{
      setIsUpdate(true);
      setTodo(todo);
      setTodoId(id);
    }

    const deleteMode = (todoId) =>{
        dispatch(deleteTodo({todoId}));
    }

    console.log(successUpdate)
  return (
    <>

        <div>
            <div className="max-w-3xl mx-auto  my-5 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold text-center text-[#ff4757] mb-2 ">Todo App</h1>

                <div className="w-full px-4 mt-3 mb-7">
                   {validationError &&( <p className='text-center mb-2 text-[#ff4757]'>{validationError}</p> )}
                   {successMessage &&( <p className='text-center mb-3 text-[#287e5a]'>{successMessage}</p> )}

                    <form className="flex gap-x-2">
                        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" className='outline-none border-2 border-gray-300 w-full p-2' />
                        <button onClick={isUpdate ? handleUpdate : handleSubmit}  className='bg-blue-500 text-white p-2 rounded-sm shadow-md transition-all duration-100'>
                            {isUpdate ? "UPDATE" : "ADD"}
                        </button>
                    </form>
                </div>

               
            { todos.todos?.length === 0 ? (
                <h2 className='text-black text-lg'>Sorry! No Todos Found.</h2> 
            ) : (
                todos.todos?.map(item =>{
                    return(
                        <TodoList key={item._id} isLoading={isLoading} error={error} task={item} updateMode={()=>updateMode(item._id,item.todo)} deleteMode={()=>deleteMode(item._id)} />
                    )
                })
            )}


            </div>
        </div>


    </>
  )
}

export default HomePage;