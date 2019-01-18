import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userLogin = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(userLogin);
  };

  render() {
    return (
      <section className="register login container">
        <img className="container" src="images/login-img.png" alt="" />
        <div className="reg-form container">
          <h1>Login</h1>
          <p>Welcome Back.</p>
          <form onSubmit={this.onSubmit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <input className="reg-submit" type="submit" />
          </form>
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
