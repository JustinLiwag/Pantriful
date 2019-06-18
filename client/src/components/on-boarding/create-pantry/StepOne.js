import React, { Component } from "react";
import {Link} from "react-router-dom"
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"

class StepOne extends Component {
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
      <div className="min-h-screen">
        <Navbar/>

        <div className="container">
          <h2>Step 1</h2>
          
        </div>

        <Footer continue={this.continue} back={this.back} first={true}/>
      </div>
    );
  }
}

export default StepOne;
