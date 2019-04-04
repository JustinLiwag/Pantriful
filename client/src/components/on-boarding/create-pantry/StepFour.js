import React, { Component } from "react";
import {Link} from "react-router-dom";
import Checkbox from "../utilities/Checkbox";

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

    createCheckboxes = (items) => {
        let result = []
        items.map(
            item => (
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
            )
            )
            return result
    } 

    render() {
    return (
        <div>
        <div className="on-boarding-nav">
            <button onClick={this.back}>Back</button>
            <Link to="/">
                    <img src="images/logo/on-boarding-logo.png" alt="" />
            </Link>
        </div>

        <div className="on-boarding-container container">
        <h2>Great! Now let's select a diet profile.</h2>
            <p>You can select a diet profile or build one from scratch. These help us personalize your lists around the needs of a specific diet.</p>
            {this.state.error ? <div className="error-message">{this.state.error}</div> : null} 
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
