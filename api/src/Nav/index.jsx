import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav id="navbar" className="navbar fixed-top navbar-expand-md navbar-dark py-0">
        <a className="navbar-brand" href="#">WEATHER</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarLinks">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">LINK</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">LINK</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">LINK</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
