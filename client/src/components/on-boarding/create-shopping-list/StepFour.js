import React, { Component } from "react";
// import {Link} from "react-router-dom"
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"

class StepOne extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
      <div className="mb-48">
        <Navbar />
        <div className="container px-8 md:px-0">
          <img className="mx-auto mt-8 w-full md:max-w-xs" src="/images/on-boarding/Complete.png" alt=""></img>
          <h3 className="mt-4 text-2xl md:text-3xl font-bold text-gray-600">Awesome! Your <span className="text-orange-base italic font-extrabold ">profile</span> is all set.</h3>
          <p className="mt-1 text-md md:text-lg leading-loose max-w-xl mx-auto text-gray-600">You can now check out your profile on your dashboard.</p>
        </div>
        <Footer submit={this.submit} back={this.back} last={true}/>
      </div>
    );
  }
}

export default StepOne;
