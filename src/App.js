import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostForm from "./components/layout/PostForm";
import CommentForm from "./components/layout/CommentForm";
import NavBar from "./components/layout/NavBar";
import Splash from "./components/layout/Header";
import Landing from "./components/layout/Landing";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Splash />
        <Landing />
        <hr />
        <PostForm />
        <CommentForm />
      </div>
    );
  }
}

export default App;
