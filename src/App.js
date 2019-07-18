import React from "react";
import "./App.css";
import PostForm from "./components/layout/PostForm";
import CommentForm from "./components/layout/CommentForm";
import NavBar from "./components/layout/NavBar";
import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Routes from "./Routes";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
