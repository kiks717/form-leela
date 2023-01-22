import { createPost, formatPosts, getPosts } from "../../services/PostService";
import { useNavigate } from "react-router-dom";
export const CREATE_POST_ACTION = '[Post Action] Create Post'
export const GET_POSTS = '[Post Action] Get Post';
export const CONFIRMED_GET_POSTS = '[Post Action] Confirmed Get Post';

export function createPostAction(postData,history) {

    return (dispatch) => {
        createPost(postData).then(response => {
            console.log(response.data)
            // history.pushState('/posts')
            history.push('/posts')
        });
    }
}
export function getPostAction()  {
    return (dispatch) => {
        getPosts().then((response) => {
            let posts = formatPosts(response.data);
            dispatch(confirmedPostAction(posts));
        })
    };  
}


export function confirmedPostAction(posts) {
    return {
        type : CONFIRMED_GET_POSTS,
        payload : posts,
    }
}