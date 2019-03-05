import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul>
        <li>
          <Link className="navbar-auth-links" to="/"><img src="./images/explore-icon.png" alt=""></img>Explore</Link>
        </li>
        <li>
          <Link className="navbar-auth-links" to="/"><img src="./images/customize-icon.png" alt=""></img>Customize Pantry</Link>
        </li>
        <li>
          <Link to="/" onClick={this.onLogoutClick.bind(this)}>
             Logout
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-signup-button">
          <Link to="/register">Sign up</Link>
        </li>
      </ul>
    );

    return (
      <nav className="flexnav container">
        <Link className="logo" to="/">
          <img src="images/pantriful-logo-orange.png" alt="" />
        </Link>
        {isAuthenticated ? authLinks : guestLinks}
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
