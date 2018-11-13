import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="container navbar is-transparent">
        <div className="navbar-brand">
          <a className="logo navbar-item" href="index.html">
            <img
              src="images/pantriful-logo-1.svg"
              alt="Pantriful Logo"
              width="112"
              height="28"
            />
          </a>
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="register.html">
              Sign Up
            </a>
            <a className="navbar-item" href="#">
              Login
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
