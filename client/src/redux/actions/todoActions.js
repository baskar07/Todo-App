import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS, UPDATE_TODO_FAILURE, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS } from "../constants/todoConstants"

import axios from 'axios';

export const postTodo = (payload) =>async (dispatch) =>{
     dispatch({type:POST_TODO_REQUEST});
     try {
        const res = await axios.post('http://localhost:5000/api/add-todo',{
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
        const res = await axios.get('http://localhost:5000/api/get-todos');
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
        const res = await axios.put(`http://localhost:5000/api/update-todo/${payload.todoId}`,{
            _id:payload.todoId,
            todo:payload.todo
        });
        dispatch({type:UPDATE_TODO_SUCCESS, payload:res.data});
    } catch (error) {
        dispatch({
            type:UPDATE_TODO_FAILURE,
            payload:error.message
        })
    }
}