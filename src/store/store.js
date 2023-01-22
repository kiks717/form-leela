import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { PostsReducers } from './reducer/PostsReducers';
import { confirmedPostAction, GET_POSTS } from "./actions/PostsActions";
import axios from "axios";
import thunk from "redux-thunk";

//logger will log it to the console everytime middleware is dispatched
const  loggerMiddleware = (store) => (next) => (action) => {
    console.log('dispatchin action',action);
    console.log('before dispatching state', store.getState());
    //if next() was called here that would be the end of middleware
    let result = next(action);
    setTimeout(() => {
        console.log('dispacthing time out')
    },5000)
    console.log('next state', store.getState());
    return result;
};

const fetchDataMiddleware = store => next => action => {
    if(action.type === GET_POSTS){
        //ajax call
        axios.get(`
        https://web-app-create-default-rtdb.firebaseio.com/posts.json`)
        .then((response) => {
            console.log(response.data);
            let posts = [];
            for(let key in response.data){
                posts.push({...response.data[key], id : key})
            };
            store.dispatch(confirmedPostAction(posts));
            });
    }
    return next(action);
}
const middleware = applyMiddleware(loggerMiddleware,fetchDataMiddleware);


export const store = configureStore({
    reducer : PostsReducers,
    middleware : middleware[thunk]

});
export default store
//applyMiddleware is store enchancer;
