import React, { Component } from "react";
import {Link} from "react-router-dom";
import TextFieldGroup from "./utilities/formFieldGroup";

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
    continue = e => {
    e.preventDefault();
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
