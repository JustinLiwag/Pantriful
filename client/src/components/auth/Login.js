import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

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
            <input className="reg-submit" type="submit" />
          </form>
          <p id="member-login">
            <Link to="/register">
              Not a member?
              <span className="pantriful-orange"> Sign up</span>
            </Link>
          </p>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
