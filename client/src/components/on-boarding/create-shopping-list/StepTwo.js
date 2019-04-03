import React, { Component } from "react";
import {Link} from "react-router-dom"

class StepTwo extends Component {
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
            <h2>Add Items from your Pantry </h2>
            <img src="./images/shopping-cart-2.png" alt="" />
            <p>
              First, you will select items from your pantry. These will be
              added to your shopping list.
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

export default StepTwo;
