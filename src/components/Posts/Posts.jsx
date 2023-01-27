import { Component } from "react";
import {connect} from 'react-redux';
import { createPostAction,getPostAction } from "../../store/actions/PostsActions";
import { bindActionCreators } from "redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SinglePost from "../../pages/SinglePost/SinglePost";
import EditPost from "../../pages/EditPost/EditPost";
class Posts extends Component{
  
  onCreatePost(){
    this.props.createPostAction();
  }

  componentDidUpdate(){
    if(this.props.posts && !this.props.posts.length){
      this.props.getPostAction();
    }
  }
  render() {
    const posts = [];

    for(let post of this.props.posts){

      posts.push(
           <div
            key={post.id}>
            {post.title} 
            {post.description}
            <div>
              <Link to={{pathname : `/posts/${post.id}`}} >
                View Details
              </Link> 
              <br/>
              <Link to={{pathname : `/posts/edit/${post.id}`}} >
                Edit Details
              </Link>
            </div>
              <br/>
              <hr/>
        </div>
        );
    } 
    return (
        <div>
          <h2>Posts</h2>
          <Link to='/createpost'>Create Post</Link>
          <hr/> 
          <hr/>
          <div>
            <div>
            {posts}
            </div>
            <div>
              {this.props.posts.length && 
              <div>
              <Routes>
              <Route path="/posts/:id" exact element={<SinglePost/>}/>
              <Route path="/posts/edit/:id" element={<EditPost/>}/>
              </Routes>
              </div>
              }
            </div>
          </div>
      </div>
      )
  }
}; 

const mapStateToProps = (state) => {
    return {
      posts : state.posts.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
  return  bindActionCreators({
    createPostAction,getPostAction
  }, dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);