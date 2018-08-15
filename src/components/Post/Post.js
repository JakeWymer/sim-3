import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Post extends Component {
  state = {
    post: {}
  }

  async componentDidMount() {
    let post = await axios.get(`/posts/${this.props.match.params.post_id}`);
    console.log(post);
    this.setState({post : post.data});
  }

  render() {
    console.log(this.state.post);
    return (
      <div>
        POSTS
      </div>
    );
  }
}

export default Post;