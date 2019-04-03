import React, { Component } from "react";
import {Link} from "react-router-dom"

class Complete extends Component {
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

    submit = e => {
        e.preventDefault();
        this.props.createSubmit();
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
            <h2>You’re all set!</h2>
            <p>
              These two grocery lists will help us create your own personalized food profile and let us make customized grocery lists tailored to you. Lets See how your profile looks like now!
            </p>
            <button className="main-button" onClick={this.submit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Complete;
