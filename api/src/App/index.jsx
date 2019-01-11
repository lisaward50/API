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
        <div className="content">
          <Currencies />
        </div>
      </div>
    );
  }
}

export default App;
