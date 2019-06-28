import React, { Component } from "react";
// import {Link} from "react-router-dom";
// import TextFieldGroup from "../utilities/formFieldGroup";
// import isEmpty from "../../../validation/is-empty";
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"

const PROFILE = [
    {name: "General / Traditional"},
    {name: "Vegetarian"},
    {name: "Paleo"},
    {name: "Vegan"},
    {name: "Gluten Free"},
    {name: "Keto"},
    {name: "Other"}
]

class StepThree extends Component {
    state = {
        error: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    continue = e => {
        e.preventDefault();

        this.setState({error: false})
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
                <li key={array[i].name} className="mt-2 mx-1 w-2/3 md:w-1/4">
                    <input 
                        className="hidden"
                        id={array[i].name}
                        type="checkbox"
                        name={array[i].name}
                        defaultChecked={false}
                        checked={this.props.values.dietProfile.get(array[i].name)}
                        onChange={this.props.handleChange}
                    />
                    <label className="block text-gray-500 py-2 md:py-4 border-2 rounded border-gray-500 hover:bg-orange-200 hover:border-orange-base hover:text-orange-600 font-bold capitalize text-sm" htmlFor={array[i].name}>{array[i].name}</label>
                </li>
            )
        }
        return results
    }

    render() {
    return (
        <div className="mb-48">
        <Navbar/>

        <div className="container">
            <h3 className="text-2xl md:text-3xl mt-4 md:mt-0 font-bold text-gray-600">What kind of <span className="text-orange-base">diet</span> do you have?</h3>
            {this.state.error ? <div className="text-center text-xl mt-4 pl-2 text-red-400">{this.state.error}</div> : null}
            <ul className="flex mx-auto justify-center content-center flex-wrap checkbox-click md:max-w-xl mt-4">
                {this.generateCheckboxes(PROFILE)}
            </ul>
        </div>
        

        <Footer continue={this.continue} back={this.back} />
        </div>
    );
    }
}

export default StepThree;
