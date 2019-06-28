import React, { Component } from "react";
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"


class StepFour extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    continue = e => {
        e.preventDefault();
        return this.props.nextStep();
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
              <img className="mx-auto mt-8 w-full md:max-w-sm" src="/images/landing-page/how-it-works/create.png" alt=""></img>
              <h3 className="mt-4 text-2xl md:text-3xl font-bold text-gray-600">Awesome! Let's build your <span className="text-orange-base italic font-extrabold ">pantry</span> next!</h3>
              <p className="mt-1 text-md md:text-lg leading-loose max-w-xl mx-auto text-gray-600">Your pantry includes all the things you like to eat. Don’t worry, we made it really easy to set up.</p>
            </div>
            <Footer continue={this.continue} back={this.back}/>
          </div>
    );
    }
}

export default StepFour;
