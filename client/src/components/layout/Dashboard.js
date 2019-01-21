import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="container dashboard">
        <h1>Welcome to Pantriful</h1>
        <p>
          Thank you for signing up! We will be launching our beta soon and begin
          opening up profiles to test. We can't wait to show you what we have
          been working on. <br />
          <br />
          -The Pantriful Team
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(Dashboard);
