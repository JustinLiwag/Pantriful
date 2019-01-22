import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CreateProfile extends Component {
  render() {
    return (
      <div className="container">
        <h1>Create Food Profile Route</h1>
      </div>
    );
  }
}

export default connect(null)(CreateProfile);
