import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePost from "./components/CreatePost/CreatePost";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";

const App = () => {
  return (
  <div>
    <Header/>
    <div className="App">
      <Routes>
        <Route path="/posts" element={<Posts/>}/> 
        <Route path="/createpost" element={<CreatePost/>}/> 
        <Route path="/" element={<Home/>}/> 
      </Routes>
    </div>
  </div>    

  )
};

export default App;