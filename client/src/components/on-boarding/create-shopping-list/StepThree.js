import React, { Component } from "react";
import {Link} from "react-router-dom"

class StepThree extends Component {
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
            <h2>You can change the quantity</h2>
            <img src="./images/shopping-cart-3.png" alt=""/>
            <p>You can change the quantitiy or amount of a particular item that you want. The price will update accordingly.</p>
            <button className="main-button" onClick={this.continue}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StepThree;
