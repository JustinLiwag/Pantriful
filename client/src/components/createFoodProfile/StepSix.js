import React, { Component } from "react";

class StepSix extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  submit = e => {
    e.preventDefault();
    this.props.createSubmit();
  };

  render() {
    return (
      <div className="on-boarding-container container">
        <img
          className="on-boarding-steps"
          src="images/on-boarding-6.jpg"
          alt=""
        />
        <a onClick={this.back} className="back-button" href="">
          &lt; Back
        </a>
        <h1 className="on-boarding-title">You’re all set!</h1>
        <p className="on-boarding-description">Your pantry will evolve with you and this is just the starting point. Over the next couple of weeks we will be rolling out our customized shopping list generator and we are excited to get that in your hand to try out! <br></br><br></br>
Be sure to double check anything else before submitting your profile and let’s get going!</p>
        <div className="on-boarding-button-container">
          <button className="on-boarding-button-back" onClick={this.back}>
          Back
          </button>
          <button className="on-boarding-button" onClick={this.submit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default StepSix;
