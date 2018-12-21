import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-6 mb-2 text-center">Sign Up</h1>
              <p className="lead mb-3 text-center">
                Create your Pantriful account
              </p>
              <form action="create-profile.html" className="mb-5">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-4 form-control-lg"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control mb-4 form-control-lg"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control mb-4 form-control-lg"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control mb-4 form-control-lg"
                    placeholder="Confirm Password"
                    name="password2"
                  />
                </div>
                <input
                  type="submit"
                  className="btn p-3 btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
