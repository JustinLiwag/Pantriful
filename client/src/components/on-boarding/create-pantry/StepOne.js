import React, { Component } from "react";
// import {Link} from "react-router-dom";
// import TextFieldGroup from "../utilities/formFieldGroup";
// import isEmpty from "../../../validation/is-empty";
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"

const PROFILE = [
  { name: "General / Traditional" },
  { name: "Vegetarian" },
  { name: "Paleo" },
  { name: "Vegan" },
  { name: "Gluten Free" },
  { name: "Keto" },
  { name: "Other" }
]

class StepOne extends Component {
  state = {
    error: false
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  continue = e => {
    e.preventDefault();

    this.setState({ error: false })
    if ((this.props.getByValue(this.props.values.dietProfile, true).length > 0)) {
      return this.props.nextStep();
    }

    this.setState({
      error: "You must select a Diet Profile"
    })

    return null
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  generateCheckboxes = (array) => {
    const results = []
    for (let i = 0; i < array.length; i++) {
      results.push(
        <div key={array[i].name}
          className=
          {
            "w-full " +
            (i === array.length - 1 ? "sm:w-full" : "sm:w-1/2")
          }
        >
          <input
            className="hidden"
            id={array[i].name}
            type="checkbox"
            name={array[i].name}
            defaultChecked={false}
            checked={this.props.values.dietProfile.get(array[i].name)}
            onChange={this.props.handleChange}
          />
          <label className=
            {
              "sm:mr-2 block py-2 sm:py-4 border-2 border-gray-400 rounded-lg md:text-lg text-gray-500 font-bold md:hover:text-gray-600 md:hover:border-gray-500 " +
              (i === 0 ? 'mt-0 sm:mt-2 ' : 'mt-2 ')
            }
            htmlFor={array[i].name}>{array[i].name}</label>
        </div>
      )
    }
    return results
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="text-center mx-8 mt-8 sm:mt-12 max-w-xl sm:mx-auto mb-32">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-700"><span className="text-orange-base">Welcome!</span> First things first...</h3>
          <p className="text-md sm:text-lg text-gray-600">Let's find out more about you and what type of diet you have.</p>
          <div className="border-b border-gray-300 mb-4 pb-4">
            <div className="inline-block mx-auto h-2 w-10 sm:w-16 bg-gray-300 rounded-full"></div>
            <div className="inline-block ml-1 mx-auto h-2 w-10 sm:w-16 bg-gray-300 rounded-full"></div>
            <div className="inline-block ml-1 mx-auto h-2 w-10 sm:w-16 bg-gray-300 rounded-full"></div>
            <div className="inline-block ml-1 mx-auto h-2 w-10 sm:w-16 bg-gray-300 rounded-full"></div>
          </div>
          {this.state.error ? <div className="text-center my-4 text-red-400">{this.state.error}</div> : null}
          <div className="sm:-mr-2 sm:flex sm:flex-1 sm:flex-wrap sm:items-center green-checkbox-click select-none">
            {this.generateCheckboxes(PROFILE)}
          </div>
        </div>

        <Footer continue={this.continue} back={this.back} none={true} first={true}/>
      </div>
    );
  }
}

export default StepOne;
