import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import CreatePost from "./components/CreatePost/CreatePost";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Posts from "./components/Posts/Posts";
import EditPost from "./pages/EditPost/EditPost";
import SingUp from "./pages/SignUp/SingUp";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAutoLogin } from "./services/AuthService";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    checkAutoLogin(dispatch,navigate);
  },[])

  return (
  <div>
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/posts/*" element={<Posts/>}/> 
        <Route path="/signup" element={<SingUp/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/createpost" element={<CreatePost/>} /> 
        <Route path="/edit" element={<EditPost/>} /> 

        <Route path="/" element={<Home/>}/> 
      </Routes> 
    </div>
  </div>    

  )
};

export default App;