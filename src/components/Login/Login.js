import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./Login.css";

class Login extends React.Component {
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    console.log(this.props);
    if (!this.props.loggedIn) {
      return (
        <div class="login-background">
          <div class="login-box">
            <div class="upper-labels">
              <div class="login-signup" id="inactive">
                <h3>Sign Up</h3>
              </div>
              <div class="login-login" id="active">
                <h3>Login</h3>
              </div>
            </div>

            <div class="signup-form">
              <form>
                <label for="username">Username:</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="username"
                />

                <label for="lname">Password:</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="password"
                />

                <div class="login-submit-button">
                  <input
                    type="submit"
                    value="Log In"
                    onClick={this.handleLogin}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/profile" />;
    }
  }
}

export default Login;
