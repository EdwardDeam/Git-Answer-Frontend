import React from "react";
import axios from "axios";

class Login extends React.Component {
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const URL = "http://localhost:5000/users/login";
    // state = {
    // name: "anhar"
    // password: "123456"
    // }
    // const username = this.state.username
    // const passwood = thius.state.password

    const { username, password } = this.state;
    try {
      const response = await axios.post(URL, {
        username: username,
        password: password
      });
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input onChange={this.handleChange} type="text" name="username" />
          </label>
          <label>
            Password:
            <input onChange={this.handleChange} type="text" name="password" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
