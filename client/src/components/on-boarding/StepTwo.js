import React, { Component } from "react";
import {Link} from "react-router-dom";
import TextFieldGroup from "./utilities/formFieldGroup";
import isEmpty from "../../validation/is-empty";

// Fields for the input form
const FIELDS = [{
        placeholder: "Username",
        name: "username",
        type: "text"
    },
    {
        placeholder: "Age",
        name: "age",
        type: "number"
    },
    {
        placeholder: "Height (e.g. 5'5)",
        name: "height",
        type: "text"
    },
    {
        placeholder: "Weight (lbs)",
        name: "weight",
        type: "text"
    }
];

class StepTwo extends Component {
    state = {
        username: false,
        age: false,
        height: false,
        weight: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    continue = e => {
    e.preventDefault();

    // Validation for Text Form
    const {username, age, height, weight} = this.props.values
    this.setState({
        username: false,
        age: false,
        height: false,
        weight: false 
    })

    // Username Regex 
    const regex = /^([a-zA-Z ]){6,20}$/;
    if (username.length <= 5 || age <= 0 || height.length <= 0 || weight <= 0 ) {
        if (!regex.test(username)) {
            this.setState({username: "Invalid characters"})
        }
        if (isEmpty(username)) {
            this.setState({username: "Must enter username"})
        }
        if (isEmpty(age)) {
            this.setState({age: "Must enter age"})
        }
        if (isEmpty(height)) {
            this.setState({height: "Must enter height"})
        }
        if (isEmpty(weight)) {
            this.setState({weight: "Must enter weight"})
        }
        if (username.length < 6) {
            this.setState({username: "Username needs to be at least 6 characters"})
        }
        return null
    }

    // Go to next step
    this.props.nextStep();
    };

    back = e => {
    e.preventDefault();
    this.props.prevStep();
    };

    // Build forms for input
    buildForm = fields => {
    const { values, handleChange } = this.props;
    const result = [];
    for (var i = 0; i < fields.length; i++) {
        result.push(
        <TextFieldGroup
            key={i}
            type={fields[i].type}
            placeholder={fields[i].placeholder}
            name={fields[i].name}
            value={values[fields[i].name]}
            onChange={handleChange(fields[i].name)}
            error={this.state[fields[i].name]}
        />
        );
    }
    return result;
    };

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
            <h2>Lets get some basic information down.</h2>
            <p>We’ll use this info soley to determine nutrient targets and calculations.</p>
            <div className="on-boarding-form">{this.buildForm(FIELDS)}</div>
        </div>
        

        <div className="on-boarding-footer">
            <button onClick={this.continue}>Next</button>
        </div>
        </div>
    );
    }
}

export default StepTwo;
