import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Nav = (props) => {
  if(props.pathname === '/') {
    return null
  }

  return (
    <div>
      <Link to="/dashboard"><p>Home</p></Link>
      <Link to="/new"><p>New Post</p></Link>
      <Link to="/"><p>Logout</p></Link>
    </div>
  );
};

const mapStateToProps = state => state.user;

export default connect(mapStateToProps, null)(Nav);