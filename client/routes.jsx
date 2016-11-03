import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, IndexLink, Link } from 'react-router';
import Farms from './Farms';
import Index from './Index';
import App from './app';

class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Index} />
        <Route path='/farms' component={Farms} />
      </Router>
    );
  }
}

module.exports = Routes
