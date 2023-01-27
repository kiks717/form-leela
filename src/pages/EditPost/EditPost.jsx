import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePostAction } from '../../store/actions/PostsActions';
import { getPost } from '../../store/selectors/PostSelector'

function EditPost(props) {
    const [post,setPost] = useState(props.post);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setPost(props.post)
    },[props.post])

    function onUpdatePost(e) {
    
        e.preventDefault();
        dispatch(updatePostAction(post,navigate({pathname :'/posts'})))
    }
    function navigateEdit(){
            navigate({pathname : '/posts/edit/:id'})
            console.log('editPosts')
    }
  return (
    <div>
        <h3>Edit Post Details</h3>
        <div>
            <form onSubmit={onUpdatePost}>
                <div>
                    <label>Title</label>
                    <div>
                        <input type="text"  value={post.title}
                        onChange={(e) => setPost([{...post,title : e.target.value}])}
                        /> 
                    </div>
                </div>
                <div>
                    <label>Description</label>
                    <div>
                        <textarea  value={post.description} 
                        onChange={(e) => setPost([{...post,description : e.target.value}])}
                        
                        /> 
                    </div>
                </div>

                <div>
                    <button type='submit' onClick={navigateEdit}>edit post</button>
                </div>
            </form>
        </div>
    </div>
  )
}

const makeStateToProps = () => {
    const {id} = useParams();
    const post = getPost();
    return (state,props) => {
        return {
            post : post(id)
        }
    }
}

export default connect(makeStateToProps)(EditPost)