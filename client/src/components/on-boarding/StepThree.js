import React, { Component } from "react";
import {Link} from "react-router-dom";
import Checkbox from "./utilities/Checkbox";

// Non API Items 
const INTOLERANCES = [
    {name: "Peanuts"},
    {name: "Gluten"},
    {name: "Shellfish"},
    {name: "Milk and Dairy"},
    {name: "Soy"},
    {name: "Seeds"},
    {name: "Stone Fruit"},
    {name: "Tree Nuts"},
    {name: "Wheat"},
    {name: "Eggs"},
    {name: "Gelatin"},
]

class StepThree extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    continue = e => {
    e.preventDefault();
    this.props.nextStep();
    };

    back = e => {
    e.preventDefault();
    this.props.prevStep();
    };

    createCheckboxes = (items) => {
        let result = []
        items.map(
            item => {
                result.push(
                    <Checkbox
                        id={item.name}
                        key={item.name}
                        type={"checkbox"}
                        name={item.name}
                        checked={this.props.values.dietaryRestrictions.get(item.name)}
                        onChange={this.props.handleChange}
                    />
                )
            }
            )
            return result
    } 

    render() {
    return (
        <div>
        <div className="on-boarding-nav">
            <button onClick={this.back}>Back</button>
            <Link to="/">
            <img src="images/pantriful-logo-orange.png" alt="" />
            </Link>
        </div>

        <div className="on-boarding-container container">
            <h2>Do you have any allergies or intolerances?</h2>
            <p>Select any allergies or intolerances that you want us to be aware of.</p>
            <ul className="checkbox-grid">
                {this.createCheckboxes(INTOLERANCES)}
            </ul>
        </div>

        <div className="on-boarding-footer">
            <button onClick={this.continue}>Next</button>
        </div>
        </div>
    );
    }
}

export default StepThree;
