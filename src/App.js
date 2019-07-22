import React from "react";
import "./App.css";
import CommentForm from "./components/layout/CommentForm";
import NavBar from "./components/layout/NavBar";
import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Routes from "./Routes";
import axios from "axios";

class App extends React.Component {
  state = {
    loggedIn: false
  };

  login = async (username, password) => {
    const URL = "http://localhost:5000/users/login";
    try {
      const response = await axios.post(URL, {
        username: username,
        password: password
      });
      localStorage.setItem("token", response.data);
      this.setState({
        loggedIn: true
      });
    } catch (err) {
      console.log(err.response);
    }
  };

  handleLogout = () => {
    localStorage.clear("token");
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Routes
          loggedIn={this.state.loggedIn}
          handleLogout={this.handleLogout}
          login={this.login}
        />
      </div>
    );
  }
}

export default App;
