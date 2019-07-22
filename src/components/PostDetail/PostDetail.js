import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PostDetail extends Component {
  state = {
    // posts: null
  };
  async componentDidMount() {
    console.log("inside component did mount");
    const { id } = this.props.match.params;
    let API = `https://git-answer-backend.now.sh/posts/${id}`;
    try {
      const response = await axios.get(API);
      console.log(response);
      this.setState({
        posts: response.data
      });
      console.log(this.state.posts);
    } catch (err) {
      console.log(err.response);
    }
  }
  render() {
    console.log("inside render");
    console.log(this.state);
    // return <p>Loading</p>;
    // console.log(this.props.match.params);
    const btn = {
      border: "1px solid black"
    };
    return (
      <div>
        <h1>Post Detail</h1>
        {this.state.posts && (
          <div>
            <h2>{this.state.posts.title}</h2>
            <p>{this.state.posts.author.username}</p>
            <p>{this.state.posts.date}</p>
            <p>{this.state.posts.text}</p>
            <Link to={`/edit-post/${this.state.posts._id}`}>
              <div style={btn}>Edit post</div>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default PostDetail;
