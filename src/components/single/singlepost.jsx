import { connect } from "react-redux";
import { getPost } from "../../store/selectors/PostSelector";

function SinglePost(props) {
  console.log(props.id)
  console.log(props.title)
  return (
    <div>
        <h2>SinglePost</h2>

        <div>
          <h4>ID : {props.id}</h4>
          <h4>title: {props.title}</h4>

        </div>
    </div>
  )
}
const makeStateToProps = () => {
  const getPostDetails = getPost();
  return (state,props) => {
      return {
        post : getPostDetails(state,props),
      }
  };

};
// const mapStateToProps = (state,props) => {
//   return {
//     post : state.posts.find((post) => post.id == props.id)
//   };
// };
export default connect(makeStateToProps)(SinglePost);