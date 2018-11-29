import React, { Component } from 'react';
import Nav from '../Nav';
import Currencies from '../Currencies';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="buffer"></div>
        <Currencies />
      </div>
    );
  }
}

export default App;
