import React, { Component } from "react";
import isEmpty from "../../../validation/is-empty";
import Navbar from "../utilities/Navbar";
import Footer from "../utilities/Footer";

class StepTwo extends Component {
  state = {
    deliveryDay: false,
    deliveryTime: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // Validation Module
  submit = e => {
    e.preventDefault();

    // Validation for Text Form
    const { deliveryDay, deliveryTime } = this.props.values;
    this.setState({
      deliveryDay: false,
      deliveryTime: false
    });

    if ( deliveryDay === "" || deliveryTime === "") {

      if (isEmpty(deliveryDay)) {
        this.setState({ deliveryDay: "You must enter a delivery day" });
      }

      if (isEmpty(deliveryTime)) {
        this.setState({ deliveryTime: "You must enter a delivery time" });
      }

      return null;
    }
    console.log(this.props)
    this.props.submit();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div className="min-h-screen mb-48">
        <Navbar />

        <div className="container">
          <h3 className="text-2xl md:text-3xl mt-4 md:mt-0 font-bold text-gray-600">
            Let us know
            <span className="text-orange-base"> when </span>you want your
            groceries delivered.
          </h3>
        </div>

        <div className="container mx-auto">
          <p className="mt-4 text-xl text-gray-600">I want my groceries delivered every:</p>
          <div className="max-w-xl mx-auto md:w-1/2 px-4 pt-4 md:pt-0 mt-4">
            <select value={this.props.values.deliveryDay} onChange={this.props.handleChange} name="deliveryDay" className="w-full bg-white outline-none shadow border border-gray-border rounded-lg py-4 px-4 block appearance-none leading-normal text-orange-base font-bold">
                <option value="">Select an day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>
            {this.state.deliveryDay ? <p className="text-left pt-2 pl-2 text-red-400">{this.state.deliveryDay}</p> : null}
          </div>
          <p className="mt-4 text-xl text-gray-600">At</p>
          <div className="max-w-xl mx-auto md:w-1/2 px-4 pt-4 md:pt-0 mt-4">
            <select value={this.props.values.deliveryTime} onChange={this.props.handleChange} name="deliveryTime" className="w-full bg-white outline-none shadow border border-gray-border rounded-lg py-4 px-4 block appearance-none leading-normal text-orange-base font-bold">
              <option value="">Select a Time</option>
              <option value="9:00am">9:00am</option>
              <option value="9:30am">9:30am</option>
              <option value="10:00am">10:00am</option>
              <option value="10:30am">10:30am</option>
              <option value="11:00am">11:00am</option>
              <option value="11:30am">11:30am</option>
              <option value="Noon">Noon</option>
              <option value="1:00pm">1:00pm</option>
              <option value="1:30pm">1:30pm</option>
              <option value="2:00pm">2:00pm</option>
              <option value="2:30pm">2:30pm</option>
              <option value="3:00pm">3:00pm</option>
              <option value="3:30pm">3:30pm</option>
              <option value="4:00pm">4:00pm</option>
              <option value="4:30pm">4:30pm</option>
              <option value="5:00pm">5:00pm</option>
              <option value="5:30pm">5:30pm</option>
              <option value="6:00pm">6:00pm</option>
              <option value="6:30pm">6:30pm</option>
              <option value="7:00pm">7:00pm</option>
            </select>
            {this.state.deliveryTime ? <p className="text-left pt-2 pl-2 text-red-400">{this.state.deliveryTime}</p> : null}
          </div>
        </div>
        <p className="text-center mt-4 text-gray-500 container">*You will be able to change these for future deliveries.</p>
        <Footer submit={this.submit} back={this.back} last={true}/>
      </div>
    );
  }
}

export default StepTwo;
