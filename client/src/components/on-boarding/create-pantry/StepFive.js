import React, { Component } from "react";
import {Link} from "react-router-dom"

class StepFive extends Component {
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
            <img src="images/pantriful-logo-orange.png" alt="" />
          </Link>
        </div>

        <div className="on-boarding-container container stepOne">
          <img src="./images/on-boarding-five.png" alt=""/>
          <h2>Awesome! <br/>Now let’s build your pantry.</h2>
          <p>Your pantry includes all the things you like to eat. Don't worry, we made it really easy to set up. <br/><br/> Let's start with the proteins.</p>
          <div className="on-boarding-footer">
            <button onClick={this.continue}>Let's Go</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StepFive;
