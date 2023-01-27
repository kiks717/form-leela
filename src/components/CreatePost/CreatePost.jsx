import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {  Link, useNavigate } from 'react-router-dom'
import { createPostAction } from '../../store/actions/PostsActions';

const CreatePost = (props) => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    let navigate = useNavigate();
    const dispatch = useDispatch();


    const onCreatePost = (e) => {
        e.preventDefault();
        const postData = {
            //framing the data 
            title, description
        };
        dispatch(createPostAction(postData));
        // navigate({pathname : '/posts'})
    }
  return (
    <div>
        
        <h2>Create</h2>
        <div>
            <Link to="/posts">Back To Posts</Link>
        </div>

        <div>
            <form onSubmit={onCreatePost}>
                <div>
                    <label>Title</label>
                    <div>
                        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Description</label>
                    <div>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                </div>

                <div>
                    <button type='button' 
                    onClick={() => navigate({pathname : '/posts'})}
                    >Create Post</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreatePost