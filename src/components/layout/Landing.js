import React, { Component } from "react";
import "./Landing.css";
import RecentPosts from "./RecentPosts";
import TrendingPosts from "./TrendingPosts";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing-post-container">
        <div className="latest-container">
          <div className="latest-header">
            <h2>Latest Solutions</h2>
            <hr />
          </div>
          <RecentPosts />
        </div>

        <div className="trending-container">
          <div className="trending-box">
            <div className="trending-header">
              <h2>Trending</h2>
              <a href="#">View all</a>
            </div>
            <hr className="trending-hr" />
            <TrendingPosts />
          </div>
        </div>
      </div>
    );
  }
}
