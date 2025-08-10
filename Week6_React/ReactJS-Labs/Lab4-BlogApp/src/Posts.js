import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      
      const posts = data.slice(0, 10).map(postData => 
        new Post(postData.userId, postData.id, postData.title, postData.body)
      );
      
      this.setState({ posts });
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by componentDidCatch:', error, errorInfo);
    alert(`An error occurred: ${error.message}`);
  }

  render() {
    const { posts } = this.state;
    
    const postStyles = {
      container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px'
      },
      post: {
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      },
      title: {
        color: '#2c3e50',
        fontSize: '20px',
        marginBottom: '10px',
        textTransform: 'capitalize'
      },
      body: {
        color: '#555',
        lineHeight: '1.6',
        fontSize: '16px'
      },
      loading: {
        textAlign: 'center',
        fontSize: '18px',
        color: '#666',
        margin: '50px 0'
      }
    };

    if (posts.length === 0) {
      return (
        <div style={postStyles.container}>
          <div style={postStyles.loading}>Loading posts...</div>
        </div>
      );
    }

    return (
      <div style={postStyles.container}>
        {posts.map(post => (
          <div key={post.id} style={postStyles.post}>
            <h2 style={postStyles.title}>{post.title}</h2>
            <p style={postStyles.body}>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;