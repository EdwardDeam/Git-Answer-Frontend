import React, { Component } from "react";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <header className="topnav">
        <h3>GitAnswer</h3>
        <div className="topnav-links">
          <a href="#">Features</a>
          <a href="#">Features</a>
          <a href="#">Features</a>
          <a href="#">Sign In</a>
        </div>
      </header>
    );
  }
}
