import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <section className="register login container">
        <img className="container" src="images/login-img.png" alt="" />
        <div className="reg-form container">
          <h1>Login</h1>
          <p>Welcome Back.</p>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="reg-submit" type="submit">
            Submit
          </button>
          <p id="member-login">
            <Link to="/register">
              Not a member?<span className="pantriful-orange"> Sign up</span>
            </Link>
          </p>
        </div>
      </section>
    );
  }
}

export default Login;
