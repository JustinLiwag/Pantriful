import React, { Component } from "react";
import {Link} from "react-router-dom"

class Complete extends Component {
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
            <img src="images/pantriful-logo-orange.png" alt="" />
          </Link>
        </div>

        <div className="on-boarding-container container stepOne">
          <img src="./images/on-boarding-one.png"/>
          <h2>Awesome! Your Pantry is all set!</h2>
          <p> This will help us figure out what you like to eat so that we can create a service tailored to you. This will be something you can change whenever you want. <br/><br/>Lets go to your homepage. </p>
          <button className="main-button onward-button" onClick={this.continue}>Onward!</button>
        </div>
      </div>
    );
  }
}

export default Complete;
