import {  DELETE_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS, UPDATE_TODO_FAILURE, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS } from "../constants/todoConstants"



const initialState = {
    isLoading : false,
    todos:[],
    error:null,

    isLoadingPost: false,
    successPost: null,
    errorPost: null,

    isLoadingUpdate: false,
    successUpdate: null,
    errorUpdate: null,

    isLoadingdelete: false,
    successdelete: null,
    errordelete: null,
}


export const todoReducer = ( state = initialState, action ) =>{
    switch(action.type){
        case GET_TODOS_REQUEST:
            return{
                ...state,
                isLoading:true
            };
        case GET_TODOS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                todos:action.payload,
                error:null
            };
        case GET_TODOS_FAILURE:
            return{
                ...state,
                isLoading:false,
                todos:null,
                error:action.payload
            };
        case POST_TODO_REQUEST:
            return{
                ...state,
                isLoadingPost:true
            };
        case POST_TODO_SUCCESS:
            return{
                ...state,
                isLoadingPost:false,
                successPost:action.payload,
                errorPost:null
            };
        case POST_TODO_FAILURE:
            return{
                ...state,
                isLoadingPost:false,
                successPost:null,
                errorPost:action.payload
            };
        case UPDATE_TODO_REQUEST:
            return{
                ...state,
                isLoadingUpdate:true
            };
        case UPDATE_TODO_SUCCESS:
            return{
                ...state,
                isLoadingUpdate:false,
                successUpdate:action.payload,
                errorUpdate:null
            };
        case UPDATE_TODO_FAILURE:
        return{
            ...state,
            isLoadingUpdate:false,
            successUpdate:null,
            errorUpdate:action.payload
            };
        case DELETE_TODO_REQUEST:
            return{
                ...state,
                isLoadingdelete:true
            };
        case DELETE_TODO_SUCCESS:
            return{
                ...state,
                isLoadingdelete:false,
                successdelete:action.payload,
                errordelete:null
            };
        case DELETE_TODO_FAILURE:
            return{
                ...state,
                isLoadingdelete:false,
                successdelete:null,
                errordelete:action.payload
            };
        default:
            return  state;
    }
}