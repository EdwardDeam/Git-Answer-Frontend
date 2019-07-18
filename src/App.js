import React from "react";
import "./App.css";
import PostForm from "./components/layout/PostForm";
import CommentForm from "./components/layout/CommentForm";
import NavBar from "./components/layout/NavBar";
import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

<<<<<<< HEAD
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
=======
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Landing />
        <hr />
        <PostForm />
        <CommentForm />
      </div>
    );
  }
>>>>>>> 2620a71776717db225351119497016b6b1dbff29
}

export default App;
