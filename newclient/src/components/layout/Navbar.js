import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="container navbar is-transparent">
        <div className="navbar-brand">
          <Link className="logo navbar-item" to="/">
            <img
              src="images/pantriful-logo-1.svg"
              alt="Pantriful Logo"
              width="112"
              height="28"
            />
          </Link>
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
            <Link className="navbar-item" to="/register">
              Sign Up
            </Link>
            <Link className="navbar-item" to="/login">
              Login
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
