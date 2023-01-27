import {createSelector} from 'reselect'

export const getPostById = (state,postId) =>{ state.posts.posts.find((post) => post.id === postId)};
export const getPost = () => createSelector([getPostById], (post) => post);


// import { createSelector } from "reselect";

// export const getPosts = (state) => {state.posts};

// export const getFilter = (state) => {state.filter};

// export const getPostId = (state,props) => {state.posts.find((post) => post.id == props.id)}

// export const getPost = () => createSelector([getPostId], (post) => { 
//         return post;
// });
// export const getActivePosts = createSelector(
//         [getPosts, getFilter],
//         (posts,filter) => {
//             switch(filter){
//                 case 'SHOW_ACTIVE' : 
//                     return posts.filter((post) => post.isActive)
//                 case 'SHOW_INACTIVE' : 
//                     return posts.filter((post) => !post.isActive)
//                 default : return posts;
//             }
//         }
//     )