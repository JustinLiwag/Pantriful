import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShoppingListTwo extends Component {
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
            <h2>Shopping List Two</h2>
            <p>Description</p>
            <button className="main-button" onClick={this.continue}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingListTwo;
