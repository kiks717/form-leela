import { CONFIRMED_CREATE_POST_ACTION, CONFIRMED_EDIT_POST_ACTION, CONFIRMED_GET_POSTS, CREATE_POST_ACTION } from "../actions/PostsActions";

const initialState = {posts : [
    {title : '', description : '', id : Math.random()}
]}

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
        if(action.type === CONFIRMED_EDIT_POST_ACTION){
            const posts = [...state.posts];
            const postIndex = posts.findIndex(post => post.id === action.payload.id);
            console.log(postIndex)
            posts[postIndex] = action.payload;
            return {
                ...state,
                posts,
            };

        };
        if(action.type ===  CONFIRMED_CREATE_POST_ACTION){
            /**copy of state then pushing new post to state and 
             * overwriting with posts data
             */
            const posts = [...state.posts];
            posts.push(action.payload);

            return{
                ...state,
                posts
            }
        }

        if(action.type === CONFIRMED_GET_POSTS){
            return {
                ...state,
                posts : action.payload,
            }
        }
        return state;
};