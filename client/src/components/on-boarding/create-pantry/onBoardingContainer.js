import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getFoodProfile,
  sendFoodProfile
} from "../../../actions/foodProfileActions";
import Spinner from '../../common/Spinner';

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

// Pantry
import Chicken from "./pantry/Chicken";
import Beef from "./pantry/Beef";
import Pork from "./pantry/Pork";
import Lamb from "./pantry/Lamb";
import Seafood from "./pantry/Seafood";

import Checkup from "./pantry/Checkup";

import Vegetables from "./pantry/Vegetables";
import Fruits from "./pantry/Fruits";
import AlternativeProteins from "./pantry/AlternativeProteins";
import Grains from "./pantry/Grains";
import Dairy from "./pantry/Dairy";

import Complete from "./Complete";

class CreateProfile extends Component {
  state = {
    step: 1,
    username: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    dietProfile: new Map(),
    dietaryRestrictions: new Map(),
    checkedItems: new Map()
  };

  componentWillMount = () => {
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

  // Handle text fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
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

  // Handle checkbox fields change for Pantry
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

  getNameItem = (array, item_id) => {
    const result = array.filter(item => item.item_id.indexOf(item_id) !== -1);
    return result;
  };

  getNotesItem = (array, value) => {
    const result = array.filter(item => item.item_ids.indexOf(value) !== -1);
    return result;
  };

  // Create pantry of selected items
  createPantry = (masterFoodProfile, checkedItems) => {
    const result = [];
    checkedItems.map(e => {
      const object = masterFoodProfile.filter(item => item.item_id === e);
      return result.push(object);
    });
    return result;
  };

  // Create Checkbox Items
  createCheckboxItems = array => {
    let result = [];
    for (var i = 0; i < array.length; i++) {
      result.push({
        name: array[i].item_id,
        label: array[i].name
      });
    }
    return result;
  };

  // Create payload for API when submitted   
  createSubmit = () => {
    const dietProfileItems = this.getByValue(this.state.dietProfile, true);
    const dietaryRestrictionsItems = this.getByValue(this.state.dietaryRestrictions, true);
    const checkedItems = this.getByValue(this.state.checkedItems, true);

    const payload = {
      username: this.state.username,
      age: this.state.age,
      height: this.state.height,
      weight: this.state.weight,
      foodProfile: checkedItems,
      dietProfile: dietProfileItems,
      dietaryRestrictions: dietaryRestrictionsItems
    };
    console.log(payload)
    this.props.sendFoodProfile(payload, this.props.history);
  };

    // Create New Functions

    // Filters through Master food profile for food items in a category
    getCategoryItems = (array, value) => {
        const result = array.filter(item => item.category.indexOf(value) !== -1);
        return result;
    }; 

  render() {
    const { foodProfile, loading } = this.props.foodProfile;
    const { step } = this.state;
    const {
      username,
      gender,
      age,
      height,
      weight,
      dietProfile,
      dietaryRestrictions,
      checkedItems
    } = this.state;
    const values = {
      username,
      gender,
      age,
      height,
      weight,
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
              handleChange={this.handleChange}
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
            <StepThree
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              getByValue={this.getByValue}
              handleChange={this.handleDietProfileCheckboxChange}
            />            
          );
        case 4:
          return (
            <StepFour
                nextStep={this.nextStep}
                prevStep={this.prevStep}
            />            
          );
        case 5:
          return (
            // Chicken
            <Chicken
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
            />            
          );
        case 6:
          return (
            // Beef
            <Beef
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
            />            
          );
        case 7:
          return (
            // Pork
            <Pork
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
            />            
          );
        case 8:
          return (
            // Lamb
            <Lamb
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
            />            
          );
        case 9:
          return (
            // Seafood
            <Seafood
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
            />            
          );
        case 10:
          return (
            // Pork
            <Checkup
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
            />            
          );
        case 11:
          return (
            // Vegetables
            <Vegetables
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
            />            
          );
        case 12:
          return (
            // Fruits
            <Fruits
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
            />            
          );
        case 13:
          return (
            // AlternativeProteins
            <AlternativeProteins
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
            />            
          );
        case 14:
          return (
            // Grains
            <Grains
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
            />            
          );
        case 15:
          return (
            // Dairy
            <Dairy
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                getCategoryItems={this.getCategoryItems}
                foodProfile={foodProfile}
                handleCheckboxChange={this.handleCheckboxChange}
            />            
          );
        case 16:
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
