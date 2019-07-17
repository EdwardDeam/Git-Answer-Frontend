import React, { Component } from "react";
import "./Landing.css";
import PostPreview from "./PostPreview";
import TrendingPosts from "./TrendingPosts";
const API = "https://git-answer-backend.now.sh/posts";

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
  constructor(props) {
    super(props);
    this.state = {
      posts: null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const posts = await response.json();
      this.setState({ posts: posts });
      console.log(posts);
    } catch (error) {
      console.error(error);
      console.log("Fetch Error: Landing.js, componentDidMount");
    }
  }

  render() {
    if (!this.state.posts) {
      return <div />;
    }
    return (
      <div className="content">
        <div className="main-container">
          <h2>Latest Solutions</h2>
          <hr />
          {this.state.posts.map(post => (
            <PostPreview key={post._ID} data={post} />
          ))}
          {/* <PostPreview data={this.state.posts[1]} /> */}
        </div>

        <div className="right-side-container">
          <div className="trending-container">
            <h2>Trending</h2>
            <hr className="trending-hr" />
            <TrendingPosts data={this.state.posts[0]} />
            <TrendingPosts data={this.state.posts[1]} />
            <TrendingPosts data={this.state.posts[2]} />
            <TrendingPosts data={this.state.posts[3]} />
            <TrendingPosts data={this.state.posts[4]} />
            {/* <TrendingPosts data={testPost} />
            <TrendingPosts data={testPost} />
            <TrendingPosts data={testPost} />
            <TrendingPosts data={testPost} /> */}
          </div>
          <div className="right-side-box">
            <p />
          </div>
        </div>
      </div>
    );
  }
}
