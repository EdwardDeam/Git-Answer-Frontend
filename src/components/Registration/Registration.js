import React from "react";
import axios from "axios";
import "../Login/Login.css";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { username, email, password } = this.state;

      const postUser = "http://localhost:5000/users";
      const response = await axios.post(postUser, {
        username,
        password,
        email
      });
      console.log(response);
      this.setState({ data: response.data });
    } catch (err) {
      console.log(err.response);
    }

    // console.log(this.state);
  };

  render() {
    return (
      <div className="login-background">
        <div className="login-box">
          <div className="upper-labels">
            <div className="login-signup" id="active">
              <h3>Sign Up</h3>
            </div>
            <div className="login-login" id="inactive">
              <h3>Login</h3>
            </div>
          </div>

          <div className="signup-form">
            <form onSubmit={this.handleSubmit}>
              <label for="username">Username:</label>
              <input
                type="text"
                name="username"
                value={this.state.value}
                onChange={this.handleChange}
              />

              <label for="email">E-mail Address:</label>
              <input
                type="text"
                name="email"
                value={this.state.value}
                onChange={this.handleChange}
              />

              <label for="password">Password:</label>
              <input
                type="text"
                name="password"
                value={this.state.value}
                onChange={this.handleChange}
              />

              <input type="checkbox" id="checkbox65" checked />
              <label
                for="checkbox65"
                name="checkbox65_lbl"
                className="css-label med elegant"
              >
                I agree to the <a href="#">terms and conditions</a>
              </label>
              <br />

              <div className="login-submit-button">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
