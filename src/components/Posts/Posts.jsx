import { Component } from "react";
import {connect} from 'react-redux';
import { createPostAction,getPostAction } from "../../store/actions/PostsActions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

class Posts extends Component{
  
  onCreatePost(){
    this.props.createPostAction();
  }

  componentDidUpdate(){
    this.props.getPostAction();
  }
  render() {
    const posts = [];
    for(let post of this.props.posts){
      posts.push(<div key={post.id}>
        {post.title} <br/>
        {post.description} <hr/>
        </div>)
    } 
    return (
        <div>
          <h2>Posts</h2>
          <Link to='/createpost'>Create Post</Link>
          <hr/> 
          <div>{posts}</div>
      </div>
      )
  }
}; 

const mapStateToProps = (state) => {
    return {
      posts : state.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
  return  bindActionCreators({createPostAction,getPostAction}, dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);