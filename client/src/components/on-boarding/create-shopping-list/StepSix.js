import React, { Component } from "react";
import {Link} from "react-router-dom"

class StepSix extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
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
            <img src="images/on-boarding-logo.png" alt="" />
          </Link>
        </div>

        <div className="on-boarding-container container stepOneShoppingCart">
          <div>
            <h2>Create your second shopping list</h2>
            <img src="./images/shopping-cart-6.png" alt="" />
            <p>
              After finishing your first shopping list you will make a
              second one. We recommend mixing it up a bit so we can see how
              your choices changes up from week to week.
            </p>
            <div className="on-boarding-footer">
              <button onClick={this.continue}>Next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StepSix;
