import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <header className="topnav">
        <h3>GitAnswer</h3>
        <div className="topnav-links">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/profile">Sign In</Link>
        </div>
      </header>
    );
  }
}
