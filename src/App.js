import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Routes from './Routes';
import Nav from './components/Nav/Nav';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav pathname={this.props.location.pathname}/>
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
