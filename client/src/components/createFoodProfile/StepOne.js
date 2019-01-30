import React, { Component } from "react";
import TextFieldGroup from "../common/textFieldGroup";

const FIELDS = [
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
      <div>
        <h1>Step One: Basic Information</h1>
        {this.buildForm(FIELDS)}
        <button onClick={this.continue}>Continue</button>
      </div>
    );
  }
}

export default StepOne;
