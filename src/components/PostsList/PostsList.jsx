import React, { useState } from 'react';
import {connect, useSelector} from 'react-redux';
import { IncrementCount } from '../../store/actions/PostsListActions';
import SinglePost from '../single/SinglePost';


function PostsList(props) {
    const posts = useSelector((state) => state.posts);
    const [postId,setPostId] = useState(''); 

    function onPostClick(id) {
        setPostId(id);
    }

  return (
    <div>
        <h2>PostList</h2>
        <button onClick={() => props.increment(props.count)}>Increment Count</button>
        <div>{props.count}</div>
        <div>
        {posts.map((post) => <button 
                                key={post.id}
                                onClick={() => onPostClick(post.id)}>
                                 {posts.title}
                            </button>)}
    </div>
            {/* <div>{postId && 
            <div>
                <SinglePost id='1' title='title 1'/>
                <SinglePost id='2' title='title 2'/>
            </div>
            }
            </div> */}
    </div>


  )
}
//to prevent re-rendering comp use createSelector
const getActivePosts = (posts,filter) => {

    };
const mapStateToProps = (state) => {
    return {
        posts : getActivePosts(state),
        count : state.count,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment : () => dispatch(IncrementCount())
    };
}

export default  connect(mapStateToProps,mapDispatchToProps)(PostsList)