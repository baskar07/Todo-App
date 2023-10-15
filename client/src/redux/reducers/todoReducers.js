import {  POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS } from "../constants/todoConstants"



const initialState = {
    isLoading:false,
    todos:[],
    error:null,
}

export const todoReducer = ( state = initialState, action ) =>{
    switch(action.type){
        case POST_TODO_REQUEST:
            return{
                ...state,
                isLoading:true,
            };
        case POST_TODO_SUCCESS:
            return{
                ...state,
                isLoading:false,
                todos:action.payload,
                error:null
            };
        case POST_TODO_FAILURE:
            return{
                ...state,
                isLoading:false,
                todos:null,
                error:action.payload
            };
       
        default:
            return  state;
    }
}