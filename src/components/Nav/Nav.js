import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import setUser from '../../ducks/reducer';

class Nav extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    axios.get('/me')
      .then(user => this.props.setUser(user.data))
      .catch(err => console.log(err));
  }

  logout = e => {
    e.preventDefault();
    axios.post('/logout').then(() => this.setState({redirect: true}))
  }

  render() {

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
      </div>
    );
  }
};

const mapStateToProps = state => state.user;

export default connect(mapStateToProps, {setUser})(Nav);