import { GET_TODOS_REQUEST } from "../constants/todoConstants"



const initialState = {
    isLoading:false,
    todos:[],
    error:null,
}

export const todoReducer = ( state = initialState, action ) =>{
    switch(action.type){
        case GET_TODOS_REQUEST:
            return{
                ...state,
                isLoading:true,
            };
        default:
            return  state;
    }
}