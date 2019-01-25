import React, { Component } from "react";
import TextFieldGroup from "../common/textFieldGroup.js";

class FormBasicInformation extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="reg-form container">
        <h1>Basic Information</h1>
        <p>Hello! Let’s get some basic information.</p>
        <form>
          <TextFieldGroup
            type="number"
            placeholder="Age"
            name="age"
            onChange={handleChange("age")}
            value={values.age}
          />
          <TextFieldGroup
            type="text"
            placeholder="Height (e.g 5'5)"
            name="height"
            onChange={handleChange("height")}
            value={values.height}
          />
          <TextFieldGroup
            type="text"
            placeholder="Weight (lbs)"
            name="weight"
            onChange={handleChange("weight")}
            value={values.weight}
          />
          <TextFieldGroup
            type="text"
            placeholder="Diet Orientation"
            name="dietOrientation"
            onChange={handleChange("dietOrientation")}
            value={values.dietOrientation}
          />
          <TextFieldGroup
            type="text"
            placeholder="Dietary Restrictions"
            name="dietaryRestrictions"
            onChange={handleChange("dietaryRestrictions")}
            value={values.dietaryRestrictions}
          />
          <input type="submit" className="reg-submit" onClick={this.continue} />
        </form>
      </div>
    );
  }
}

export default FormBasicInformation;
