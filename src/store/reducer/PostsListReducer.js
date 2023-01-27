import { INCREMENT_COUNT } from "../actions/PostsListActions";

const initialState = {
       posts : [
        {title : 'Post 1', isActive : true, id : 1},
        {title : 'Post 2', isActive : true, id : 2},
        {title : 'Post 3', isActive : false, id : 3},
        {title : 'Post 4', isActive : false, id : 4},
    ],
    filter : 'SHOW_ACTIVE',
    count : 0,  
}

export function PostsListReducer(state = initialState,action){
    if(action.type === INCREMENT_COUNT){
        return {
            ...state,
            count : state.count + 1
        }
    }
    return state;
};