import React, { Component } from "react";
import { connect } from "react-redux";
import { getFoodProfile } from "../../actions/foodProfileActions";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";

class CreateProfile extends Component {
  state = {
    step: 1,
    age: "",
    height: "",
    weight: "",
    dietOrientation: "",
    dietaryRestrictions: "",
    checkedItems: new Map()
  };

  componentDidMount = () => {
    this.props.getFoodProfile();
  };

  shouldComponentUpdate = () => {
    if (this.getByValue(this.state.checkedItems, true)) {
      return true;
    }
  };

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Proceed to the previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  // Handle Checkbox Action
  handleCheckboxChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  };

  // Get selected checkboxes
  getByValue = (map, searchValue) => {
    const selected = [];
    for (let [key, value] of map.entries()) {
      if (value === searchValue) {
        selected.push(key);
      }
    }
    return selected;
  };

  render() {
    const { foodProfile, loading } = this.props.foodProfile;

    const { step } = this.state;
    const {
      age,
      height,
      weight,
      dietOrientation,
      dietaryRestrictions,
      checkedItems
    } = this.state;
    const values = {
      age,
      height,
      weight,
      dietOrientation,
      dietaryRestrictions,
      checkedItems
    };

    if (foodProfile === null || loading) {
      return <h1>Loading...</h1>;
    } else {
      switch (step) {
        case 1:
          return (
            <StepOne
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 2:
          return (
            <StepTwo
              foodProfile={foodProfile}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleCheckboxChange}
              values={values}
            />
          );
        case 3:
          return (
            <StepThree
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 4:
          return (
            <StepFour
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 5:
          return (
            <StepFive
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 6:
          return (
            <StepSix
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              selectedValues={this.getByValue(this.state.checkedItems, true)}
            />
          );
        default:
          return null;
      }
    }
  }
}

const mapStateToProps = state => ({
  foodProfile: state.foodProfile
});

export default connect(
  mapStateToProps,
  { getFoodProfile }
)(CreateProfile);
