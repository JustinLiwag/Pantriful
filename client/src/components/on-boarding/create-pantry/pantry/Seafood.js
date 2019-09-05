import React, { Component } from "react";
// import {Link} from "react-router-dom";
// import TextFieldGroup from "../utilities/formFieldGroup";
// import isEmpty from "../../../../validation/is-empty";
import Navbar from "../../utilities/Navbar"
import Footer from "../../utilities/Footer"

class Beef extends Component {
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
        filteredList.sort(this.props.dynamicSort("name"))
        const results = []
        filteredList.map(
            item => (
                results.push(
                    <div key={item.name} className="w-1/2">
                        <input
                            className="hidden"
                            id={item.name}
                            type="checkbox"
                            name={item.name}
                            defaultChecked={false}
                            checked={this.props.values.checkedItems.get(item.name)}
                            onChange={this.props.handleCheckboxChange}
                        />
                        <label
                            className=
                            {
                                "mr-2 block py-2 sm:py-4 border-2 border-gray-400 rounded-lg md:text-lg text-gray-500 font-bold md:hover:text-gray-600 md:hover:border-gray-500 " +
                                (item === 0 ? 'mt-0 sm:mt-2 ' : 'mt-2 ')
                            }
                            htmlFor={item.name}>{item.name}</label>
                    </div>
                )
            )
        )
        return results
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="text-center mx-8 mt-8 sm:mt-12 max-w-xl sm:mx-auto mb-32">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-700">What are your favorite items of <span className="text-orange-base">Seafood?</span></h3>
                    <p className="text-md sm:text-lg text-gray-600">What you select is what you typically eat on a regular basis.</p>
                    <div className="border-b border-gray-300 mb-4 pb-4">
                        <div className="inline-block mx-auto h-2 w-10 sm:w-16 bg-orange-base rounded-full"></div>
                        <div className="inline-block ml-1 mx-auto h-2 w-10 sm:w-16 bg-orange-base rounded-full"></div>
                        <div className="inline-block ml-1 mx-auto h-2 w-10 sm:w-16 bg-gray-300 rounded-full">
                            <div className="rounded-l-full bg-orange-base w-4/5 h-full"></div>
                        </div>
                        <div className="inline-block ml-1 mx-auto h-2 w-10 sm:w-16 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="-mr-2 flex flex-1 flex-wrap items-center green-checkbox-click select-none">
                        {this.createCheckboxesFromApi(this.props.foodProfile, "Seafood")}
                    </div>
                </div>

                <Footer continue={this.continue} back={this.back} />
            </div>
        );
    }
}

export default Beef;
