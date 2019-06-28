import React, { Component } from "react";
// import {Link} from "react-router-dom";
// import TextFieldGroup from "../utilities/formFieldGroup";
// import isEmpty from "../../../../validation/is-empty";
import Navbar from "../../utilities/Navbar"
import Footer from "../../utilities/Footer"

class AlternativeProtein extends Component {
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

    createCheckboxesFromApi = (items, category) => {
        const filteredList = this.props.getCategoryItems(items, category)
        const results = []
        filteredList.map(
            item=> (
                results.push(
                <li key={item.name} className="mt-2 mx-1 w-2/3 md:w-1/4">
                    <input 
                        className="hidden"
                        id={item.name}
                        type="checkbox"
                        name={item.name}
                        defaultChecked={false}
                        checked={this.props.values.checkedItems.get(item.name)}
                        onChange={this.props.handleCheckboxChange}
                    />
                    <label className="block text-gray-500 py-2 md:py-4 border-2 rounded border-gray-500 hover:bg-orange-200 hover:border-orange-base hover:text-orange-600 font-bold capitalize text-sm" htmlFor={item.name}>{item.name}</label>
                </li>
            )
        )
        )
        return results
    }

    render() {
    return (
        <div className="mb-48">
        <Navbar/>

        <div className="container">
            <h3 className="text-2xl md:text-3xl mt-4 md:mt-0 font-bold text-gray-600">Pick out your favorite <span className="text-orange-base">Alternative Proteins</span>.</h3>
            <ul className="flex items-stretch mx-auto justify-center content-center flex-wrap checkbox-click md:max-w-xl mt-4">
                {this.createCheckboxesFromApi(this.props.foodProfile, "Alternative Protein")}
            </ul>
        </div>
        

        <Footer continue={this.continue} back={this.back} />
        </div>
    );
    }
}

export default AlternativeProtein;
