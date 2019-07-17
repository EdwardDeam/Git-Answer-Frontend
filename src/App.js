import React from "react";
import "./App.css";
import PostForm from "./components/layout/PostForm";
import CommentForm from "./components/layout/CommentForm";
import NavBar from "./components/layout/NavBar";
import Splash from "./components/layout/Splash";
import Landing from "./components/layout/Landing";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Splash />
      <Landing />
      <hr />
      <PostForm />
      <CommentForm />
      <Login />
      <Registration />
    </div>
  );
}

export default App;
