import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { errors } = this.state;

    return (
      <section className="register container">
        <div className="reg-form container">
          <h1>Register Here</h1>
          <p>
            Enter your personal details and start your new grocery experience
            with us.
          </p>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="First Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            {errors.name ? (
              <div className="error-message">{errors.name}</div>
            ) : (
              <div />
            )}
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.onChange}
            />
            {errors.lastName ? (
              <div className="error-message">{errors.lastName}</div>
            ) : (
              <div />
            )}
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            {errors.email ? (
              <div className="error-message">{errors.email}</div>
            ) : (
              <div />
            )}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            {errors.password ? (
              <div className="error-message">{errors.password}</div>
            ) : (
              <div />
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={this.state.password2}
              onChange={this.onChange}
            />
            {errors.password2 ? (
              <div className="error-message">{errors.password2}</div>
            ) : (
              <div />
            )}
            <input type="submit" className="reg-submit" />
          </form>
          <p id="member-login">
            <Link to="/login">
              Already a member?{" "}
              <span className="pantriful-orange">Sign in</span>
            </Link>
          </p>
        </div>
        <img
          className="container register-img"
          src="images/register-img.png"
          alt=""
        />
      </section>
    );
  }
}

export default Register;
