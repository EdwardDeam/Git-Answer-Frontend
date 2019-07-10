import React from 'react';
import axios from 'axios';

class PostForm extends React.Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const postPath = 'post_path';
  };
  render() {
    return (
      <div>
        <h1>Create new post</h1>
        <form onSubmit={this.handleSubmit}>
          <label for='title'>Title</label>
          <input
            type='text'
            name='title'
            onChange={this.handleChange}
            className='titlepost'
          />

          <label htmlFor='body'>Body</label>
          <input type='textarea' name='body' className='bodypost' />

          <label htmlFor='tags' className='tagpost'>
            Tags
          </label>

          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default PostForm;
