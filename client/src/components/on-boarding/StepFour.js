import React, { Component } from "react";
import {Link} from "react-router-dom";
import Checkbox from "./utilities/Checkbox";

// Non API Items 
const PROFILE = [
    {name: "General / Traditional"},
    {name: "Vegetarian"},
    {name: "Paleo"},
    {name: "Vegan"},
    {name: "Gluten Free"},
    {name: "Keto"},
    {name: "Other"}
]

class StepFour extends Component {
    continue = e => {
    e.preventDefault();
    console.log(this.props.values.dietProfile);
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
                        checked={this.props.values.dietProfile.get(item.name)}
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
        <h2>Great! Now let's select a diet profile.</h2>
            <p>You can select a diet profile or build one from scratch. These help us personalize your lists around the needs of a specific diet.</p>
            <ul className="checkbox-grid">
                {this.createCheckboxes(PROFILE)}
            </ul>
        </div>

        <div className="on-boarding-footer">
            <button onClick={this.continue}>Next</button>
        </div>
        </div>
    );
    }
}

export default StepFour;
