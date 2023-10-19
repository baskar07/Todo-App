import { DELETE_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS, UPDATE_TODO_FAILURE, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS } from "../constants/todoConstants"

import axios from 'axios';

export const postTodo = (payload) =>async (dispatch) =>{
     dispatch({type:POST_TODO_REQUEST});
     try {
        const res = await axios.post('https://todo-app-qcaa.onrender.com/',{
            todo:payload.todo
        });
        dispatch({
            type:POST_TODO_SUCCESS,
            payload:res.data
        })
     } catch (error) {
        dispatch({
            type:POST_TODO_FAILURE,
            payload:error.message
        })
     }
}

export const getTodos = async(dispatch) =>{
    dispatch({type:GET_TODOS_REQUEST});
    try {
        const res = await axios.get('https://todo-app-qcaa.onrender.com/');
        dispatch({
            type:GET_TODOS_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:GET_TODOS_FAILURE,
            payload:error.message
        })
    }
}

export const updateTodo = (payload) => async(dispatch) =>{
    dispatch({type:UPDATE_TODO_REQUEST});
    try {
        const res = await axios.put(`https://todo-app-qcaa.onrender.com/${payload.todoId}`,{
            _id:payload.todoId,
            todo:payload.todo
        });
        dispatch({
            type:UPDATE_TODO_SUCCESS, 
            payload:  res.data
        });
       
    } catch (error) {
        dispatch({
            type:UPDATE_TODO_FAILURE,
            payload:error.message
        })
    }
}

export const deleteTodo = (payload) =>async(dispatch)=>{
    dispatch({type:DELETE_TODO_REQUEST});
    try {
        const res = await axios.delete(`https://todo-app-qcaa.onrender.com/${payload.todoId}`);
        dispatch({type:DELETE_TODO_SUCCESS, payload:res.data});
    } catch (error) {
        dispatch({
            type:DELETE_TODO_FAILURE,
            payload:error.message
        })
    }
}
