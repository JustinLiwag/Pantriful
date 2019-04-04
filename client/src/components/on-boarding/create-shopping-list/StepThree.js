import React, { Component } from "react";
import {Link} from "react-router-dom"

class StepThree extends Component {
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
            <img src="images/logo/on-boarding-logo.png" alt="" />
          </Link>
        </div>

        <div className="on-boarding-container container stepOneShoppingCart">
          <div>
            <h2>You can change the quantity</h2>
            <img src="./images/on-boarding/shopping-cart-3.png" alt="" />
            <p>
              You can change the quantitiy or amount of a particular item
              that you want. The price will update accordingly.
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

export default StepThree;
