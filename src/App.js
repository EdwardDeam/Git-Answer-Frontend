import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostForm from './components/layout/PostForm';
import CommentForm from './components/layout/CommentForm';

function App() {
  return (
    <div className='App'>
      <PostForm />
      <CommentForm />
    </div>
  );
}

export default App;
