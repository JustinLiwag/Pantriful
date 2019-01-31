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
    checkedItems: new Map(),
    checkedShoppingItemsOne: new Map(),
    checkedShoppingItemsTwo: new Map(),
    shoppingListOne: [],
    shoppingListTwo: []
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

  // Handle text fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  // Handle checkbox fields change
  handleCheckboxChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    if (!isChecked) {
      this.setState(prevState => ({
        checkedShoppingItemsOne: prevState.checkedShoppingItemsOne.set(
          item,
          false
        )
      }));
      var array = [...this.state.shoppingListOne]; // make a separate copy of the array
      var index = array.indexOf(
        this.getNameItem(this.state.shoppingListOne, e.target.name)[0]
      );
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ shoppingListOne: array });
      }
    }
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  };

  // Handle checkbox fields change for Shopping List One
  handleCheckboxChangeShoppingListOneTest = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedShoppingItemsOne: prevState.checkedShoppingItemsOne.set(
        item,
        isChecked
      )
    }));
  };

  handleCheckboxChangeShoppingListOne = e => {
    if (e.target.checked) {
      const rawData = this.getNameItem(
        this.props.foodProfile.foodProfile,
        e.target.name
      );
      const shoppingListObject = {
        item_id: rawData[0].item_id,
        name: rawData[0].name,
        measurementUnit: rawData[0].measurementUnit,
        notes: "",
        basePrice: rawData[0].basePrice,
        lowPrice: rawData[0].lowPrice,
        upperPrice: rawData[0].upperPrice,
        amount: ""
      };
      var newArray = this.state.shoppingListOne.concat(shoppingListObject);
      this.setState({ shoppingListOne: newArray });
    }
    if (!e.target.checked) {
      var array = [...this.state.shoppingListOne]; // make a separate copy of the array
      var index = array.indexOf(
        this.getNameItem(this.state.shoppingListOne, e.target.name)[0]
      );
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ shoppingListOne: array });
      }
    }
  };

  // Handle checkbox fields change for Shopping List Two
  handleCheckboxChangeShoppingListTwo = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedShoppingItemsTwo: prevState.checkedShoppingItemsTwo.set(
        item,
        isChecked
      )
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

  // Create pantry of selected items
  createPantry = (masterFoodProfile, checkedItems) => {
    const result = [];
    checkedItems.map(e => {
      const object = masterFoodProfile.filter(item => item.item_id === e);
      result.push(object);
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

  // Selected Items will be {{item}, {item2}, ...}
  // Food Profile is [{item1}, {item2}]
  createShoppingListOne = (selectedItems, foodProfile) => {
    const result = [];
    for (var i = 0; i < selectedItems.length; i++) {
      const NewObject = [];
      const rawData = this.getNameItem(foodProfile, selectedItems[i]);
      console.log("RAW DATA:", rawData);
      const shoppingListObject = {
        item_id: rawData[0].item_id,
        name: rawData[0].name,
        measurementUnit: rawData[0].measurementUnit,
        notes: "",
        basePrice: rawData[0].basePrice,
        lowPrice: rawData[0].lowPrice,
        upperPrice: rawData[0].upperPrice,
        amount: ""
      };
      console.log("ITEM TO BE PUSHED TO STATE: ", shoppingListObject);
      console.log("STATE: ", this.state);
      result.push(shoppingListObject);
    }
    console.log("RESULT: ", result);
    return result;
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
      checkedItems,
      shoppingListOne,
      shoppingListTwo,
      checkedShoppingItemsOne,
      checkedShoppingItemsTwo
    } = this.state;
    const values = {
      age,
      height,
      weight,
      dietOrientation,
      dietaryRestrictions,
      checkedItems,
      shoppingListOne,
      shoppingListTwo,
      checkedShoppingItemsOne,
      checkedShoppingItemsTwo
    };

    const selectedItemsState = this.getByValue(checkedShoppingItemsOne, true);

    if (foodProfile === null || loading) {
      return <h1>Loading...</h1>;
    } else {
      switch (step) {
        case 1:
          return (
            // Get Basic Information for Food Profile (Age, Height, Weight)
            // TODO: Diet Orientation and Dietary Restrictions
            <StepOne
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              handleChange={this.handleChange}
            />
          );
        case 2:
          return (
            // Build your Pantry. Contains Proteins
            <StepTwo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              createCheckboxItems={this.createCheckboxItems}
              getCategoryItems={this.getCategoryItems}
              foodProfile={foodProfile}
              handleCheckboxChange={this.handleCheckboxChange}
            />
          );
        case 3:
          // Continue building your Pantry. Contains the rest of the Food Profile
          return (
            <StepThree
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              createCheckboxItems={this.createCheckboxItems}
              getCategoryItems={this.getCategoryItems}
              foodProfile={foodProfile}
              handleCheckboxChange={this.handleCheckboxChange}
            />
          );
        case 4:
          return (
            // Build your first shopping list with your Pantry
            <StepFour
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              handleCheckboxChangeShoppingListOne={
                this.handleCheckboxChangeShoppingListOne
              }
              getCategoryItems={this.getCategoryItems}
              createCheckboxItems={this.createCheckboxItems}
              foodProfile={foodProfile}
              pantry={this.createPantry(
                foodProfile,
                this.getByValue(this.state.checkedItems, true)
              )}
              getByValue={this.getByValue}
              getNameItem={this.getNameItem}
              selectedValues={this.getByValue(checkedShoppingItemsOne, true)}
            />
          );
        case 5:
          // Build your second shopping list with your Pantry
          return (
            <StepFive
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              handleChange={this.handleChange}
            />
          );
        case 6:
          return (
            // Confirmation and submit profile
            <StepSix
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              handleChange={this.handleChange}
              selectedValues={this.getByValue(checkedItems, true)}
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
