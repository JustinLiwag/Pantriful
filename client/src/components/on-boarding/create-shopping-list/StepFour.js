import React, { Component } from "react";
import {Link} from "react-router-dom"

class StepFour extends Component {
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
            <h2>Want something specific? Leave us a note.</h2>
            <img src="./images/shopping-cart-4.png" alt="" />
            <p>
              You can leave notes on an item to let us know if you want
              something a little more specific.{" "}
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

export default StepFour;
