import React, { Component } from "react";
import {Link} from "react-router-dom"

class StepFour extends Component {
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

        <div className="on-boarding-container container stepOneShoppingCart">
          <div>
            <h2>Create your second shopping list</h2>
            <img src="./images/shopping-cart-5.png" alt=""/>
            <p>After finishing your first shopping list you will make a second one. We recommend mixing it up a bit so we can see how your choices changes up from week to week.</p>
            <button className="main-button" onClick={this.continue}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StepFour;
