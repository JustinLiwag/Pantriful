import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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

    this.props.registerUser(newUser, this.props.history);
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
