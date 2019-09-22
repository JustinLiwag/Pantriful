import React, { Component } from "react";
// import {Link} from "react-router-dom"
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"

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
      <div className="mb-48">
        <Navbar />
        <div className="container px-8 md:px-0">
            <img className="mx-auto mt-12" src="./images/on-boarding/on-boarding-2-step-three.png" alt=""></img>
          <h3 className="mt-8 text-2xl md:text-3xl font-bold text-gray-700">You can select different categories to search your pantry.</h3>
          <p className="mt-1 text-md md:text-lg leading-loose max-w-xl mx-auto text-gray-600">These items are the items you selected before!</p>
        </div>
        <Footer continue={this.continue} back={this.back}/>
      </div>
    );
  }
}

export default StepThree;
