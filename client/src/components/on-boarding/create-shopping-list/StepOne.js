import React, { Component } from "react";
import {Link} from "react-router-dom"

class StepOne extends Component {
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
          <Link to="/"><button>Back</button></Link>
          <Link to="/">
            <img src="images/on-boarding-logo.png" alt="" />
          </Link>
        </div>
 
        <div className="on-boarding-container container stepOne">
          <img src="./images/shopping-cart-1.png" alt=""/>
          <h2>Let’s set up some shopping lists.</h2>
          <p>You will be building two example shopping lists for us. This will give us a good idea of what you usually get and how often you tend to buy things. </p>
          <div className="on-boarding-footer">
            <button onClick={this.continue}>Get Started!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StepOne;
