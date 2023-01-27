import axios from "axios";

export function getPosts() {
    return  axios.get(`https://web-app-create-default-rtdb.firebaseio.com/posts.json`)
    .then((response) => {
        console.log(response.data);
        let posts = [];
        for (let key in response.data){
            posts.push({...response.data[key], id : key});
        }
        dispatch(confirmedPostAction(posts));
    })
}
export function createPost(postData){
    return axios.post(
        `https://web-app-create-default-rtdb.firebaseio.com/posts.json`,postData
    )
}
export function updatePost(post,postId){
    return axios.put(
        `https://web-app-create-default-rtdb.firebaseio.com/posts/${postId}.json`,post
    )
}
export function formatPosts(postsData){
    let posts = [];
    for(let key in postsData){
        posts.push({...postsData[key], id : key})
    }
    return posts;
}