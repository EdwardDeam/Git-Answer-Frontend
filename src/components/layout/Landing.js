import React, { Component } from "react";
import "./Landing.css";
import PostPreview from "./PostPreview";
import TrendingPosts from "./TrendingPosts";

const date = new Date();
const testPost = {
  title: "Testing Post",
  author: "Test User",
  text:
    "To generate a new ObjectId using ObjectId() with a unique hexadecimal string: sal;kdfj;aslkfjl;a s;lkfdas;d ;l sad;flksa elaeir;mviiew s;lfaeij;dslkfm;lezifnz;sd vief;lkzmsdl/vkmzsd lsdkf;ei;zsdlkn;zlsefizds",
  tags: ["CSS", "Test Tag"],
  date: date.toLocaleDateString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })
};
export default class Landing extends Component {
  render() {
    return (
      <div className="landing-post-container">
        <div className="latest-container">
          <div className="latest-header">
            <h2>Latest Solutions</h2>
            <hr />
          </div>
          <PostPreview data={testPost} />
          <PostPreview data={testPost} />
          <PostPreview data={testPost} />
          <PostPreview data={testPost} />
          <PostPreview data={testPost} />
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
