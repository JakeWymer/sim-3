import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser} from '../../ducks/reducer';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  
  handleRegister() {
    let {username, password} = this.state;
    axios.post('/register', {username, password})
      .then(user => {
        console.log(user);
        this.props.setUser(user.data)
        this.setState({redirect: true});
      })
      .catch(err => console.log(err));
  }

  handleLogin() {
    let {username, password} = this.state;
    axios.post('/login', {username, password})
      .then(user => {
        console.log(user);
        this.props.setUser(user.data[0])
        this.setState({redirect: true});
      })
      .catch(err => console.log(err));
  }

  render() {
    if(this.state.redirect){
      return <Redirect to='/dashboard' />
    }

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

        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleRegister}>Register</button>

      </div>
    );
  }
}

export default connect(null, {setUser})(Auth);