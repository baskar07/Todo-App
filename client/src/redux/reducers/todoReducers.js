import {  GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS } from "../constants/todoConstants"



const initialState = {
    isLoading : false,
    todos:[],
    error:null,

    isLoadingPost: false,
    successPost: null,
    errorPost: null,

    isLoadingupdate: false,
    successupdate: null,
    errorupdate: null,

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
        default:
            return  state;
    }
}