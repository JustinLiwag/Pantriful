import React, { Component } from "react";
import TextFieldGroup from "../common/textFieldGroup";

const FIELDS = [
  {
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
  { placeholder: "Weight (lbs)", name: "weight", type: "text" }
];

class StepOne extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  // Builds the input forms
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
      <div className="on-boarding-container container">
        <img
          className="on-boarding-steps"
          src="images/on-boarding-1.jpg"
          alt=""
        />
        <h1 className="on-boarding-title">Basic Information</h1>
        <p className="on-boarding-description">
          Hello {this.props.user.user.name}! Let’s get some basic
          information.
        </p>
        <div className="on-boarding-form">{this.buildForm(FIELDS)}</div>
        <button className="on-boarding-button" onClick={this.continue}>
          Continue
        </button>
      </div>
    );
  }
}

export default StepOne;
