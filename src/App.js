import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import HomePage from './HomePage.js';
import SearchPage from './SearchPage.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
              <Route 
                  path="/" 
                  exact
                  render={(routerProps) => <HomePage {...routerProps} />} 
              />
              <Route 
                  path="/search" 
                  exact
                  render={(routerProps) => <SearchPage {...routerProps} />} 
              />
          </Switch>
        </Router>
      </div>
    )
  }
}
