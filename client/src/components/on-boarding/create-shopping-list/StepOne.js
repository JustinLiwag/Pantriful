import React, { Component } from "react";
// import {Link} from "react-router-dom"
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"

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
      <div className="mb-48">
        <Navbar />
        <div className="container px-8 md:px-0">
          <img className="mx-auto mt-8 w-full md:max-w-sm" src="/images/on-boarding/on-boarding-checkup.png" alt=""></img>
          <h3 className="mt-4 text-2xl md:text-3xl font-bold text-gray-600">Let's build <span className="text-orange-base italic font-extrabold ">two example</span> grocery lists.</h3>
          <p className="mt-1 text-md md:text-lg leading-loose max-w-xl mx-auto text-gray-600">These two grocery lists will gives us a good idea of what you usually get and how often you get things.</p>
        </div>
        <Footer continue={this.continue} back={this.back} first={true}/>
      </div>
    );
  }
}

export default StepOne;
