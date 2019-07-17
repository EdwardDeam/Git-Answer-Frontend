import React from "react";
import "./App.css";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>Hello</p>
        <Registration />
        <Login />
      </div>
    );
  }
}

export default App;
