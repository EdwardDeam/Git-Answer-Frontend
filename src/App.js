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
  state = { loggedIn: false };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (token) this.setState({ loggedIn: true });
  };

  // handleLogin = () => {
  //   this.setState({ loggedIn: true });
  // };

  handleLogout = () => {
    localStorage.clear("token");
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Routes
          loggedIn={this.state.loggedIn}
          handleLogout={this.handleLogout}
        />
      </div>
    );
  }
}

export default App;
