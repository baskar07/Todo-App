import { POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS } from "../constants/todoConstants"

import axios from 'axios';

export const postTodo = (todo) =>async (dispatch) =>{
     dispatch({type:POST_TODO_REQUEST});
     try {
        const res = await axios.post('http://localhost:5000/api/add-todo',{
            todo:todo
        });
        dispatch({
            type:POST_TODO_SUCCESS,
            payload:res.data
        })
     } catch (error) {
        dispatch({
            type:POST_TODO_FAILURE,
            payload:error
        })
     }
    

}