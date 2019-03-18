import React, { Component } from "react";
import {Link} from "react-router-dom"

class StepOne extends Component {
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
          <Link to="/"><button>Back</button></Link>
          <Link to="/">
            <img src="images/pantriful-logo-orange.png" alt="" />
          </Link>
        </div>
 
        <div className="on-boarding-container container stepOne">
          <h2>Step One: Create Your Shopping Lists</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend metus quam, at auctor lorem pulvinar in. Nulla sed placerat nibh. Nulla quis lobortis metus.</p>
          <button className="main-button" onClick={this.continue}>GET STARTED</button>
        </div>
      </div>
    );
  }
}

export default StepOne;
