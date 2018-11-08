import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <Login />
        </header>
      </div>
    );
  }
}

export default App;
