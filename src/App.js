'Use strict';
import React, { Component } from 'react';
import './App.css';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
