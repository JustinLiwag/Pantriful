import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getFoodProfile,
  sendFoodProfile
} from "../../../actions/foodProfileActions";
import Spinner from '../../common/Spinner';

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

// Pantry
import Chicken from "./pantry/Chicken";
import Beef from "./pantry/Beef";
import Pork from "./pantry/Pork";
import Lamb from "./pantry/Lamb";
import Seafood from "./pantry/Seafood";

import Vegetables from "./pantry/Vegetables";
import Fruits from "./pantry/Fruits";
import AlternativeProteins from "./pantry/AlternativeProteins";
import Grains from "./pantry/Grains";
import Dairy from "./pantry/Dairy";

import Complete from "./Complete";

class CreateProfile extends Component {
  state = {
    step: 1,
    dietProfile: new Map(),
    dietaryRestrictions: new Map(),
    checkedItems: new Map()
  };

  componentWillMount = () => {
    this.props.getFoodProfile();
  };

  // shouldComponentUpdate = () => {
  //   if (this.getByValue(this.state.checkedItems, true)) {
  //     return true;
  //   }
  // };

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    // Skip over protein if vegan/vegetarian
    if (this.state.dietProfile.get("Vegan") === true ||
        this.state.dietProfile.get("Vegetarian") === true) {
      if (step === 2) {
        return this.setState({step: 8})
      }
    }
    this.setState({
      step: step + 1
    });
  };

  // Proceed to the previous step
  prevStep = () => {
    const { step } = this.state;
    // Skip over protein if vegan/vegetarian
    if (this.state.dietProfile.get("Vegan") === true ||
        this.state.dietProfile.get("Vegetarian") === true) {
      if (step === 8) {
        return this.setState({ step: 2 })
      }
    }
    this.setState({
      step: step - 1
    });
  };

  // Handle checkbox fields change for Diet Profile
  handleDietProfileCheckboxChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    if (!isChecked) {
      this.setState(prevState => ({
        dietProfile: prevState.dietProfile.set(item, false)
      }));
    }
    this.setState(prevState => ({
      dietProfile: prevState.dietProfile.set(item, isChecked)
    }));
  };

  // Handle checkbox fields change for Dietary Restrictions
  handleDietaryRestrictionsCheckboxChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    if (!isChecked) {
      this.setState(prevState => ({
        dietaryRestrictions: prevState.dietaryRestrictions.set(item, false)
      }));
    }
    this.setState(prevState => ({
      dietaryRestrictions: prevState.dietaryRestrictions.set(item, isChecked)
    }));
  };


  // Handle checkbox fields change for Pantry Categories (Chicken, Beef, etc..)
  handleCheckboxChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    if (!isChecked) {
      this.setState(prevState => ({
        checkedItems: prevState.checkedItems.set(item, false)
      }));
    }
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

  // Filters through Food Profile for all items within  a category (eg. Chicken, Beef)
  getCategoryItems = (array, value) => {
    const result = array.filter(item => item.category.indexOf(value) !== -1);
    return result;
  };

  // Alphebatize array list by name (Ex. Sort fruits by name (apple, bannana))
  dynamicSort = (property) => {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  // Create payload for API when submitted   
  createSubmit = () => {
    const dietProfileItems = this.getByValue(this.state.dietProfile, true);
    const dietaryRestrictionsItems = this.getByValue(this.state.dietaryRestrictions, true);
    const checkedItems = this.getByValue(this.state.checkedItems, true);

    console.log(this.props)

    const payload = {
      email: this.props.auth.user.email,
      foodProfile: checkedItems,
      dietProfile: dietProfileItems,
      dietaryRestrictions: dietaryRestrictionsItems
    };
    this.props.sendFoodProfile(payload, this.props.history);
  };

  render() {
    const { foodProfile, loading } = this.props.foodProfile;
    const { step } = this.state;
    const {
      dietProfile,
      dietaryRestrictions,
      checkedItems
    } = this.state;
    const values = {
      dietProfile,
      dietaryRestrictions,
      checkedItems
    };

    if (foodProfile === null || loading) {
      return <Spinner />;
    } else {
      switch (step) {
        case 1:
          return (
            <StepOne
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              getByValue={this.getByValue}
              handleChange={this.handleDietProfileCheckboxChange}
            />
          );
        case 2:
          return (
            <StepTwo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              handleChange={this.handleDietaryRestrictionsCheckboxChange}
            />            
          );
        case 3:
          return (
            // Chicken
            <Chicken
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
                dynamicSort={this.dynamicSort}
            />            
          );
        case 4:
          return (
            // Beef
            <Beef
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
                dynamicSort={this.dynamicSort}
            />            
          );
        case 5:
          return (
            // Pork
            <Pork
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
                dynamicSort={this.dynamicSort}
            />            
          );
        case 6:
          return (
            // Lamb
            <Lamb
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
                dynamicSort={this.dynamicSort}
            />            
          );
        case 7:
          return (
            // Seafood
            <Seafood
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
                dynamicSort={this.dynamicSort}
            />            
          );
        case 8:
          return (
            // Vegetables
            <Vegetables
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
                dynamicSort={this.dynamicSort}
            />            
          );
        case 9:
          return (
            // Fruits
            <Fruits
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
                dynamicSort={this.dynamicSort}
            />            
          );
        case 10:
          return (
            // AlternativeProteins
            <AlternativeProteins
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
                dynamicSort={this.dynamicSort}
            />            
          );
        case 11:
          return (
            // Grains
            <Grains
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
                dynamicSort={this.dynamicSort}
            />            
          );
        case 12:
          return (
            // Dairy
            <Dairy
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
                dynamicSort={this.dynamicSort}
            />            
          );
        case 13:
          return (
            // Complete
            <Complete
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                createSubmit={this.createSubmit}
            />            
          );
        default:
          return null;
      }
    }
  }
}

const mapStateToProps = state => ({
  foodProfile: state.foodProfile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getFoodProfile, sendFoodProfile }
)(CreateProfile);
