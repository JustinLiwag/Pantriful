import React, { Component } from "react";
// import {Link} from "react-router-dom"
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"

class Complete extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  submit = e => {
    e.preventDefault();
    this.props.submit();
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
            <img className="mx-auto mt-12" src="./images/on-boarding/complete.png"></img>
          <h3 className="mt-8 text-2xl md:text-3xl font-bold text-gray-700">Awesome! Your profile is all set!</h3>
          <p className="mt-1 text-md md:text-lg leading-loose max-w-xl mx-auto text-gray-600">You can now check out your profile on your dashboard.</p>
        </div>
        <Footer submit={this.submit} last={true} back={this.back}/>
      </div>
    );
  }
}

export default Complete;
