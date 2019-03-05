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
          <img src="./images/on-boarding-one.png" alt=""/>
          <h2>Hi! Welcome to Pantriful!</h2>
          <p>We'll help make grocery shopping a breeze by creating customized shopping lists based on your preferences. But first let's get to know you better so we can tailor the experience that best fits you.</p>
          <button className="main-button" onClick={this.continue}>GET STARTED</button>
        </div>
      </div>
    );
  }
}

export default StepOne;
