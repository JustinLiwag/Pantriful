import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="flexnav container">
        <Link className="logo" to="/">
          <img src="images/pantriful-logo.jpg" alt="" />
        </Link>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-signup-button">
            <Link to="/register">Sign up</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
