import React, { Component } from 'react';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  
  render() {
    return (
      <div>
        <input 
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}/>
        
        <input 
          type="text"
          name="password"
          value={this.state.password}
          onChange={this.handleChange} />

        <button>Login</button>
        <button>Register</button>
        
      </div>
    );
  }
}

export default Auth;