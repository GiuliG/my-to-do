import React, { Component } from 'react';
import ToDos from './components/ToDos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
     <h1>My to-do list:</h1>
        <ToDos/>
      </div>
    );
  }
}

export default App;
