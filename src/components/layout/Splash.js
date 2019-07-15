import React, { Component } from "react";
import "./Splash.css";

export default class Splash extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Sharing Coding Solutions Has Never Been Easier</h1>
        <div className="search-form">
          <i className="fa fa-search mag-glass" />
          <input type="text" />
          <button>Search</button>
        </div>
      </div>
    );
  }
}
