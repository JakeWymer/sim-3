import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Post from './components/Post/Post';
import Form from './components/Form/Form';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Auth}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/post/:post_id" exact component={Post}/>
        <Route path="/new" exact component={Form}/>
      </Switch>
    );
  }
}

export default Routes;