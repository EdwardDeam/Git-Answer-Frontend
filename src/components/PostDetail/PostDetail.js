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
        post: response.data
      });
      console.log(this.state.post);
    } catch (err) {
      console.log(err.response);
    }
  }

  handleDelete = id => {
    console.log(id);
    axios.delete(`https://git-answer-backend.now.sh/posts/${id}`);
  };

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
        {this.state.post && (
          <div>
            <h2>{this.state.post.title}</h2>
            <p>{this.state.post.author.username}</p>
            <p>{this.state.post.date}</p>
            <p>{this.state.post.text}</p>
            <Link to={`/auth/edit-post/${this.state.post._id}`}>
              <div style={btn}>Edit post</div>
            </Link>
            <button onClick={() => this.handleDelete(this.state.post._id)}>
              Delete Button
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default PostDetail;
