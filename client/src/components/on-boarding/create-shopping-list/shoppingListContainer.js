import React, { Component } from "react";
import { connect } from "react-redux";
import { getFoodProfile, sendFoodProfile } from "../../../actions/foodProfileActions";
import { getCurrentProfile } from "../../../actions/profileActions"
import Spinner from '../../common/Spinner';

import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import StepFour from "./StepFour"
import StepFive from "./StepFive"

class CreateProfile extends Component {
  state = {
    step: 1,
    shoppingListOne: [],
    shoppingListTwo: []
  };

  componentWillMount = () => {
    this.props.getCurrentProfile();
    this.props.getFoodProfile();
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


  render() {
    console.log(this.props);
    if (this.props.foodProfile.foodProfile === null || this.props.foodProfile.loading) {
      return <Spinner />;
    } else {
      switch (this.state.step) {
        case 1: 
          return (
            <StepOne
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            /> 
          )
        case 2: 
          return (
            <StepTwo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />
          )
        case 3: 
          return (
            <StepThree
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />
          )
        case 4: 
          return (
            <StepFour
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />
          )
        case 5: 
          return (
            <StepFive
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />
          )
        default:
          return null;
      }
    }
  }
}

const mapStateToProps = state => ({
  foodProfile: state.foodProfile,
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getFoodProfile, sendFoodProfile, getCurrentProfile }
)(CreateProfile);
