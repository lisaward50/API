import React, { Component } from 'react';
import Nav from '../Nav'
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="mt-5">I'm a new app</div>
      </div>
    );
  }
}

export default App;
