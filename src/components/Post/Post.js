import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Post extends Component {
  render() {
    return (
      <div>
        <Link to="/dashboard"><button>Home</button></Link>
        <Link to="/form"><button>New Post</button></Link>
        <Link to="/"><button>Logout</button></Link>
      </div>
    );
  }
}

export default Post;