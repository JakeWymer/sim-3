import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Form extends Component {
  state = {
    title: '',
    imageUrl: '',
    content: '',
    redirect: false
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handlePost = () => {
    let {title, imageUrl, content} = this.state;

    axios.post(`/posts/create`, {title, imageUrl, content})
      .then(() => this.setState({redirect: true}))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props);
    if(this.state.redirect) {
      return <Redirect to="/dashboard"/>
    }
    return (
      <div>
        <input 
          type="text"
          name="title"
          onChange={this.handleChange}
          value={this.state.title}/>
        <input 
          type="text"
          name="imageUrl"
          onChange={this.handleChange}
          value={this.state.imageUrl}/>
        <input 
          type="text"
          name="content"
          onChange={this.handleChange}
          value={this.state.content}/>
        <button onClick={this.handlePost}>Post</button>
      </div>
    );
  }
}

const mapStateToProps = state => state.user

export default connect(mapStateToProps, null)(Form);