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
          <Link to="/"><button>Back</button></Link>
          <Link to="/">
            <img src="images/pantriful-logo-orange.png" alt="" />
          </Link>
        </div>

        <div className="on-boarding-container container stepOne">
          <img src="./images/on-boarding-complete.png" alt=""/>
          <h2>Awesome! Your Pantry is all set!</h2>
          <p> This will help us figure out what you like to eat so that we can create a service tailored to you. This will be something you can change whenever you want. <br/><br/>Let's go to your Dashboard. </p>
          <div className="on-boarding-footer onward-button">
            <button onClick={this.submit}>Onward!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Complete;
