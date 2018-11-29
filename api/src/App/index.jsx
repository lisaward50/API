import React, { Component } from 'react';
import Nav from '../Nav';
import Convert from '../Convert';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="buffer"></div>
        <Convert />
      </div>
    );
  }
}

export default App;
