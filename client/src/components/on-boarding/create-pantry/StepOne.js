import React, { Component } from "react";
// import {Link} from "react-router-dom"
import isEmpty from "../../../validation/is-empty";
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"

const heightOptions = ["Select one", "4'5\"", "4'6\"", "4'7\"", "4'8\"", "4'9\"", "4'10\"", "4'11\"","5'0\"",
                       "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"", "6'0\"",
                       "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\"", "6'6\"", "6'7\"", "6'8\"", "6'9\"", "6'10\"", "6'11\"", "7'0\"", "7'1\"+"]

class StepOne extends Component {
  state = {
        username: false,
        age: false,
        gender: false,
        height: false,
        weight: false
    }

  componentDidMount() {
      window.scrollTo(0, 0);
  }

  // Validation Module
  continue = e => {
    e.preventDefault();

    // Validation for Text Form
    // const {username, age, gender, height, weight} = this.props.values
    // this.setState({
    //     username: false,
    //     age: false,
    //     gender: false,
    //     height: false,
    //     weight: false 
    // })

    // // Username Regex 
    // const regex = /^([a-zA-Z ]){6,20}$/;
    // if (username.length <= 5 || age <= 0 || height.length <= 0 || weight <= 0 ) {
    //     if (!regex.test(username)) {
    //         this.setState({username: "Invalid characters"})
    //     }
    //     if (isEmpty(username)) {
    //         this.setState({username: "Must enter username"})
    //     }
    //     if (isEmpty(gender)) {
    //         this.setState({gender: "Must pick an option"})
    //     }
    //     if (isEmpty(age)) {
    //         this.setState({age: "Must enter age"})
    //     }
    //     if (isEmpty(height)) {
    //         this.setState({height: "Must enter height"})
    //     }
    //     if (isEmpty(weight)) {
    //         this.setState({weight: "Must enter weight"})
    //     }
    //     if (username.length < 6) {
    //         this.setState({username: "Username needs to be at least 6 characters"})
    //     }
    //     return null
    // }
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  renderHeightOptions = (options) => {
    const results = []
    for (let i = 0; i < options.length; i++) {
      results.push(
        <option value={options[i]}>{options[i]}</option>
      )
    }
    return results;
  }

  render() {
    return (
      <div className="min-h-screen">
        <Navbar/>

        <div className="container">
          <h3 className="text-2xl md:text-3xl mt-4 md:mt-0 font-bold text-gray-600">Let’s get started with some <span className="text-orange-base">basic information</span>.</h3>
          
          <div className="md:flex flex-wrap max-w-xl mx-auto my-2 mb-48 md:mb-0">
            <div className="mx-auto px-4 w-full pt-4 md:pt-0">
              <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">What do you want your <span className="text-orange-base">username</span> to be?</label>
              <input
                className="w-full bg-white outline-none text-gray-600 shadow border border-gray-border rounded-lg py-2 px-4 block appearance-none leading-normal"
                type="text"
                name="username"
                value={this.props.values.username}
                onChange={this.props.handleChange("username")}
                id="username"
              />
              {this.state.username ? <p className="text-left pt-2 pl-2 text-red-400">{this.state.username}</p> : null}
            </div>

            <div className="mx-auto px-4 md:w-1/2 my-2">
              <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">What is your <span className="text-orange-base">gender</span>?</label>
              <select value={this.props.values.gender} onChange={this.props.handleChange("gender")} name="gender" className="w-full bg-white outline-none shadow border border-gray-border rounded-lg py-2 px-4 block appearance-none leading-normal text-gray-600">
                <option value="">Select one</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
                <option value="Preffer not to say">Preffer not to say</option>
              </select>
              {this.state.gender ? <p className="text-left pt-2 pl-2 text-red-400">{this.state.gender}</p> : null}
            </div>

            <div className="mx-auto px-4 md:w-1/2 my-2">
              <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">How <span className="text-orange-base">old</span> are you?</label>
              <input
                className="w-full bg-white outline-none text-gray-600 shadow border border-gray-border rounded-lg py-2 px-4 block appearance-none leading-normal"
                type="number"
                name="age"
                value={this.props.values.age}
                onChange={this.props.handleChange("age")}
                id="age"
              />
              {this.state.age ? <p className="text-left pt-2 pl-2 text-red-400">{this.state.age}</p> : null}
            </div>

            <div className="mx-auto px-4 md:w-1/2 my-2">
              <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">How <span className="text-orange-base">tall</span> are you (ex. 5'5")?</label>
              <select value={this.props.values.height} onChange={this.props.handleChange("height")} name="height" className="w-full bg-white outline-none shadow border border-gray-border rounded-lg py-2 px-4 block appearance-none leading-normal text-gray-600">
                {this.renderHeightOptions(heightOptions)}
              </select>
              {this.state.height ? <p className="text-left pt-2 pl-2 text-red-400">{this.state.height}</p> : null}
            </div>

            <div className="mx-auto px-4 md:w-1/2 my-2">
              <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">How much do you <span className="text-orange-base">weigh</span> (lbs)?</label>
              <input
                className="w-full bg-white outline-none text-gray-600 shadow border border-gray-border rounded-lg py-2 px-4 block appearance-none leading-normal"
                type="number"
                name="weight"
                value={this.props.values.weight}
                onChange={this.props.handleChange("weight")}
                id="weight"
              />
              {this.state.weight ? <p className="text-left pt-2 pl-2 text-red-400">{this.state.weight}</p> : null}
            </div>
          </div>

        </div>

        <Footer continue={this.continue} back={this.back} first={true}/>
      </div>
    );
  }
}

export default StepOne;
