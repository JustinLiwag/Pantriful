import React, { Component } from "react";
import {Link} from "react-router-dom"

class StepTwo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div>
        <div className="on-boarding-nav">
          <button onClick={this.back}>Back</button>
          <Link to="/">
            <img src="images/pantriful-logo-orange.png" alt="" />
          </Link>
        </div>

        <div className="on-boarding-container container stepOne">
          <h2>Step Two: Create Your Shopping Lists</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend metus quam, at auctor lorem pulvinar in. Nulla sed placerat nibh. Nulla quis lobortis metus.</p>
          <button className="main-button" onClick={this.continue}>Next</button>
        </div>
      </div>
    );
  }
}

export default StepTwo;
