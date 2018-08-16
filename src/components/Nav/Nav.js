import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {setUser, clearUser} from '../../ducks/reducer';

class Nav extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    console.log('MOUNTED');
    this.getUser();
  }

  getUser = () => {
    axios.get('/me')
        .then(user => {
          console.log(user);
          if(!user.data.message) {
            console.log('SETTING', user.data);
            this.props.setUser(user.data)
          }
        })
        .catch(err => console.log(err));
  }

  logout = e => {
    e.preventDefault();
    axios.post('/logout').then(() => {
      this.props.clearUser();
      this.setState({redirect: true})
    })
  }

  render() {
    console.log(this.props);
    if(this.props.pathname === '/') {
      return null
    }
  
    if(this.state.redirect) {
      return <Redirect to="/"/>
    }

    return (
      <div>
        <Link to="/dashboard"><p>Home</p></Link>
        <Link to="/new"><p>New Post</p></Link>
        <a href="/#/" onClick={this.logout}>Logout</a>
        <h2>{this.props.username}</h2>
      </div>
    );
  }
};

const mapStateToProps = state => state.user;

export default connect(mapStateToProps, {setUser, clearUser})(Nav);