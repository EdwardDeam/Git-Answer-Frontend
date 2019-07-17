import React, { Component } from "react";
import "./Landing.css";
import PostPreview from "./PostPreview";
import TrendingPosts from "./TrendingPosts";

const date = new Date();
const testPost = {
  title: "Testing Post",
  author: "USERNAME",
  text:
    "What is Lorem Ipsum?  Lorem Ipsum is simplydummym repetition, injected humour, or non-characteristic words etc.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
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
      <div className="content">
        <div className="main-container">
          <h2>Latest Solutions</h2>
          <hr />
          <PostPreview data={testPost} />
          <PostPreview data={testPost} />
          <PostPreview data={testPost} />
          <PostPreview data={testPost} />
          <PostPreview data={testPost} />
          <PostPreview data={testPost} />
          <PostPreview data={testPost} />
        </div>

        <div className="right-side-container">
          <div className="trending-container">
            <h2>Trending</h2>
            <hr className="trending-hr" />
            <TrendingPosts data={testPost} />
            <TrendingPosts data={testPost} />
            <TrendingPosts data={testPost} />
            <TrendingPosts data={testPost} />
          </div>
          <div className="right-side-box">
            <p />
          </div>
        </div>
      </div>
    );
  }
}
