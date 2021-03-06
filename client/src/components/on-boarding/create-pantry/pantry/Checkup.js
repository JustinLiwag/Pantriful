import React, { Component } from "react";
import Navbar from "../../utilities/Navbar"
import Footer from "../../utilities/Footer"


class Checkup extends Component {
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
                <img className="mx-auto mt-8 w-full md:max-w-sm" src="/images/landing-page/how-it-works/improve.png" alt=""></img>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold text-gray-600">You're doing great! <span className="text-orange-base italic font-extrabold ">Almost</span> there!</h3>
                <p className="mt-1 text-md md:text-lg leading-loose max-w-xl mx-auto text-gray-600">This will be the last part of your pantry. It includes fruits, vegetables, and more!</p>
            </div>
            <Footer continue={this.continue} back={this.back}/>
        </div>
    );
    }
}

export default Checkup;
