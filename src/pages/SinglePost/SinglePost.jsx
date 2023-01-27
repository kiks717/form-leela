import React from 'react'
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../../store/selectors/PostSelector';

function SinglePost(props) {
  const posts = useSelector((state) => state.posts)
  return (
    <div>
      <h3>SinglePost</h3>
      {posts.map((post) => {
        return (
          <div key={post.id}>
          <div>ID : {post.id}</div>
          <div>Title : {post.title}</div>
          <div>Description : {post.description}</div>
          </div>
        )
      })}

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
};


export default connect(makeStateToProps)(SinglePost);