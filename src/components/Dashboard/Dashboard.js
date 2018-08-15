import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
  state = {
    search: '',
    checked: true,
    posts: []
  }

  componentDidMount() {
    this.handleSearch()
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSearch = async () => {
    let qs = this.buildQS();
    let url = `/posts?${qs}`
    console.log(url);
    let posts = await axios.get(url);
    console.log(posts);
    this.setState({posts: posts.data});
  }

  handleCheck = e => {
    console.log(e.target.checked);
    this.setState({checked: e.target.checked});
  }

  buildQS = () => {
    let {search, checked: userposts} = this.state;

    let qs = '';

    if(search.length > 0) {
      qs += `&search=${search}`
    }

    if(userposts) {
      qs += `&userposts=${userposts}`;
    }

    return qs;
  }

  handleReset = async () => {
    this.setState({search: ''});
    
    let qs = this.buildQS();
    let url = `/posts?${qs}`
    console.log(url);
    let posts = await axios.get(url);
    console.log(posts);
    this.setState({posts: posts.data});
  }

  render() {
    let posts = this.state.posts.map(post => {
      return <Link to={`/post/${post.post_id}`}><h2>{post.title}</h2></Link>
    });

    return (
      <div>
        <input 
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.handleChange}/>
        <button onClick={this.handleSearch}>Search</button>
        <button onClick={this.handleReset}>Reset</button>
        <input type="checkbox" checked={this.state.checked} name="check" onChange={this.handleCheck}/>
        <div>
          {posts}
        </div>
      </div>
    );
  }
}

export default Dashboard;