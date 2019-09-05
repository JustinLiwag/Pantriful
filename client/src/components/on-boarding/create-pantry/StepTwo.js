import React, { Component } from "react";
// import {Link} from "react-router-dom";
// import TextFieldGroup from "../utilities/formFieldGroup";
// import isEmpty from "../../../validation/is-empty";
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"

const INTOLERANCES = [
    {name: "Peanuts"},
    {name: "Gluten"},
    {name: "Milk and dairy"},
    {name: "Wheat"},
    {name: "Shellfish"},
    {name: "Fish"},
    {name: "Soy"},
    {name: "Seeds"},
    {name: "Stone fruit"},
    {name: "Tree nuts"},
    {name: "Eggs"},
    {name: "Gelatin"},
    {name: "None"}
]

class StepTwo extends Component {

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

    generateCheckboxes = (array) => {
        const results = []
        for (let i = 0; i < array.length; i++) {
            results.push(
                <div key={array[i].name}
                    className=
                    {
                        "w-1/2 " +
                        (i === array.length - 1 ? "w-full" : "sm:w-1/4")
                    }
                >
                    <input
                        className="hidden"
                        id={array[i].name}
                        type="checkbox"
                        name={array[i].name}
                        defaultChecked={false}
                        checked={this.props.values.dietaryRestrictions.get(array[i].name)}
                        onChange={this.props.handleChange}
                    />
                    <label className=
                        {
                            "mr-2 block py-2 sm:py-4 border-2 border-gray-400 rounded-lg md:text-lg text-gray-500 font-bold md:hover:text-gray-600 md:hover:border-gray-500 " +
                            (i === 0 ? 'mt-0 mt-2 ' : 'mt-2 ')
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
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-700">Do you have any <span className="text-orange-base">allergies or intolerances?</span></h3>
                    <p className="text-md sm:text-lg text-gray-600">Let us know if there are any foods you should avoid or substitute for.</p>
                    <div className="border-b border-gray-300 mb-4 pb-4">
                        <div className="inline-block mx-auto h-2 w-10 sm:w-16 bg-orange-base rounded-full"></div>
                        <div className="inline-block ml-1 mx-auto h-2 w-10 sm:w-16 bg-gray-300 rounded-full"></div>
                        <div className="inline-block ml-1 mx-auto h-2 w-10 sm:w-16 bg-gray-300 rounded-full"></div>
                        <div className="inline-block ml-1 mx-auto h-2 w-10 sm:w-16 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="sm:-mr-2 flex flex-1 flex-wrap items-center red-checkbox-click select-none">
                        {this.generateCheckboxes(INTOLERANCES)}
                    </div>
                </div>

                <Footer continue={this.continue} back={this.back} />
            </div>
        );
    }
}

export default StepTwo;
