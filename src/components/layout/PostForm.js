import React from 'react';
import axios from 'axios';

class PostForm extends React.Component {
  handleChange = e => {
    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const postPath = 'http://localhost:5000/posts';
    axios
      .post(postPath, {
        title: this.state.title,
        text: this.state.text,
        tags: this.state.tags
      })
      .then(res => {
        console.log(res);
      });
  };
  render() {
    return (
      <div>
        <h1>Create new post</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            onChange={this.handleChange}
            className='titlepost'
          />

          <label htmlFor='text'>Body</label>
          <input
            type='textarea'
            name='text'
            onChange={this.handleChange}
            className='bodypost'
          />

          <label htmlFor='tags'>Tags</label>
          <input
            type='text'
            name='tags'
            onChange={this.handleChange}
            className='tagpost'
          />

          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default PostForm;
