import { CONFIRMED_GET_POSTS, CREATE_POST_ACTION } from "../actions/PostsActions";

const initialState = {posts : []}

export function PostsReducers(state = initialState,action){
        if(action.type === CREATE_POST_ACTION){
            //create post and add post
            const singlePost =  {
                    id:Math.random(),
                    title : 'Posts Title 3',
                    description : 'Sample Desc 3asadass'
                };
            const posts = [...state.posts];//copy 
            posts.push(singlePost);
            return {
                ...state,
                posts,
            };
        }

        if(action.type === CONFIRMED_GET_POSTS){
            return {
                ...state,
                posts : action.payload,
            }
        }
        return state;
};