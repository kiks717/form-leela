import { createPost, formatPosts, getPosts, updatePost } from "../../services/PostService";
import { useNavigate } from "react-router-dom";

export const CREATE_POST_ACTION = '[Post Action] Create Post';
export const CONFIRMED_CREATE_POST_ACTION = '[Post Action] Confirmed Create Post';
export const GET_POSTS = '[Post Action] Get Post';
export const CONFIRMED_GET_POSTS = '[Post Action] Confirmed Get Post';
export const EDIT_POST_ACTION = '[Post Action] Edit Post';
export const CONFIRMED_EDIT_POST_ACTION = '[Post Action] Confirmed Edit Post';


export function createPostAction(postData ) {
    let navigate = useNavigate();

    return (dispatch) => {
        createPost(postData).then((response) => {
            const singlePost = {
                ...postData,
                id : response.data.name,
            };
            console.log(response.data)
            dispatch(confirmedCreatePostAction(singlePost));
            navigate('/posts')
        });
    }
}
export function getPostAction()  {
    return (dispatch,getState) => {
        getPosts().then((response) => {
            console.log(getState());
            let posts = formatPosts(response.data);
            dispatch(confirmedPostAction(posts));
            console.log(getState());
            });
    };  
}

export function confirmedCreatePostAction(singlePost){
    return {
        type : CONFIRMED_CREATE_POST_ACTION,
        payload  : singlePost,
    }
}
export function confirmedPostAction(posts) {
    return {
        type : CONFIRMED_GET_POSTS,
        payload : posts,
    }
}

export function confirmedUpdatePostAction(post){
    return {
        type : CONFIRMED_EDIT_POST_ACTION,
        payload  : post,
    }
}
export function updatePostAction(post){
    const navigate = useNavigate();
    return(dispatch) => {
        updatePost(post,post.id).then(response => {
            dispatch(confirmedUpdatePostAction(post));
            navigate('/posts')
        });
    };
}