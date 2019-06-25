import React, { Component } from "react";
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"

class Complete extends Component {
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
                <img className="mx-auto mt-8 w-full md:max-w-sm" src="/images/on-boarding/shopping-cart-1.png" alt=""></img>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold text-gray-600">Your <span className="text-orange-base italic font-extrabold ">Pantry</span> is all set! Let's go to your dashboard.</h3>
                <p className="mt-1 text-md md:text-lg leading-loose max-w-xl mx-auto text-gray-600">This will help us figure out what you like to eat so that we can do all kinds of cool stuff for you. Your pantry will be something you can view and change whenever you want.</p>
            </div>
            <Footer submit={this.submit} back={this.back} last={true}/>
        </div>
    );
  }
}

export default Complete;
