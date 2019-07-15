import React, { Component } from "react";
import "./TrendingPosts.css";

export default class TrendingPosts extends Component {
  render() {
    return (
      <div class="trending-list">
        <div class="trending-icon">
          <img src="https://picsum.photos/200" />
        </div>
        <div class="trending-card">
          <h4>Lorem ipsum dolor amet air plant street art trust fund</h4>
          <h5>PERSONS' NAME • 02 JULY 2019</h5>
          <p>
            Polo santo shabby chic keffiyeh poke pork belly whateer cardigan.
            Raw denim put a bird on it.
          </p>
          <a href="#">Keep reading</a>
        </div>
      </div>
    );
  }
}
