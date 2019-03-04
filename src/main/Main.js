import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../app/App'
import Home from '../home/Home'
import Privacy from '../privacy/privacy'
import Support from '../support/support'

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/app'}>Apps</Link></li>
            <li><Link to={'/privacy'}>Privacy</Link></li>
            <li><Link to={'/support'}>Support</Link></li>
          </ul>
          <Route exact path='/' component={Home} />
          <Route path='/app' component={App} />
          <Route path='/privacy' component={Privacy} />
          <Route path='/support' component={Support} />
        </div>
      </Router>
    );
  }
}

export default Main;
