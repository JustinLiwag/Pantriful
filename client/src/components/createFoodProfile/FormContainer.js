import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getFoodProfile,
  sendFoodProfile
} from "../../actions/foodProfileActions";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";

class CreateProfile extends Component {
  state = {
    step: 1,
    username: "",
    age: "",
    height: "",
    weight: "",
    dietOrientation: "",
    dietaryRestrictions: "",
    checkedItems: new Map(),
    shoppingListOne: [],
    shoppingListTwo: []
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

  handleShoppingCartAmountChangeOne = input => e => {
    const { name, value } = e.target;
    var data = [...this.state.shoppingListOne];
    var index = data.findIndex(obj => obj.name === name);
    data[index].amount = value;
    this.setState({ data });
  };

  handleShoppingCartAmountChangeTwo = input => e => {
    const { name, value } = e.target;
    var data = [...this.state.shoppingListTwo];
    var index = data.findIndex(obj => obj.name === name);
    data[index].amount = value;
    this.setState({ data });
  };

  handleShoppingCartNotesChangeOne = input => e => {
    const { name, value } = e.target;
    var data = [...this.state.shoppingListOne];
    var index = data.findIndex(obj => obj.name === name);
    data[index].notes = value;
    this.setState({ data });
  };

  handleShoppingCartNotesChangeTwo = input => e => {
    const { name, value } = e.target;
    var data = [...this.state.shoppingListTwo];
    var index = data.findIndex(obj => obj.name === name);
    data[index].notes = value;
    this.setState({ data });
  };

  // Handle checkbox fields change
  handleCheckboxChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    if (!isChecked) {
      this.setState(prevState => ({
        checkedItems: prevState.checkedItems.set(item, false)
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
        amount: 1
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

  handleCheckboxChangeShoppingListTwo = e => {
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
        amount: 1
      };
      var newArray = this.state.shoppingListTwo.concat(shoppingListObject);
      this.setState({ shoppingListTwo: newArray });
    }
    if (!e.target.checked) {
      var array = [...this.state.shoppingListTwo]; // make a separate copy of the array
      var index = array.indexOf(
        this.getNameItem(this.state.shoppingListTwo, e.target.name)[0]
      );
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ shoppingListTwo: array });
      }
    }
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
        amount: 1
      };
      console.log("ITEM TO BE PUSHED TO STATE: ", shoppingListObject);
      console.log("STATE: ", this.state);
      result.push(shoppingListObject);
    }
    console.log("RESULT: ", result);
    return result;
  };

  getTotal = list => {
    let lower = 0;
    let upper = 0;
    for (var i = 0; i < this.state[list].length; i++) {
      lower += this.state[list][i].amount * this.state[list][i].lowPrice;
      upper += this.state[list][i].amount * this.state[list][i].upperPrice;
    }
    return (
      <p className="total" key="total">
        Estimated Total: $ {lower.toFixed(2)} - $ {upper.toFixed(2)}
      </p>
    );
  };

  createSubmit = () => {
    const foodProfileData = this.createPantry(
      this.props.foodProfile.foodProfile,
      this.getByValue(this.state.checkedItems, true)
    );
    // Temp fix for array nested within another array
    const foodProfileCond = [];
    for (var i = 0; i < foodProfileData.length; i++) {
      foodProfileCond.push(foodProfileData[i][0]);
    }

    console.log(this.state.shoppingListOne)
    const payload = {
      username: this.state.username,
      age: this.state.age,
      height: this.state.height,
      weight: this.state.weight,
      foodProfile: foodProfileCond,
      shoppingListOne: this.state.shoppingListOne,
      shoppingListTwo: this.state.shoppingListTwo
    };
    this.props.sendFoodProfile(payload, this.props.history);
  };

  render() {
    const { foodProfile, loading } = this.props.foodProfile;
    const { step } = this.state;
    const {
      username,
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
      username,
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
              user={this.props.auth}
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
              getNotesItem={this.getNotesItem}
              handleShoppingCartAmountChange={
                this.handleShoppingCartAmountChangeOne
              }
              handleShoppingCartNotesChange={
                this.handleShoppingCartNotesChangeOne
              }
              getTotal={this.getTotal}
            />
          );
        case 5:
          // Build your second shopping list with your Pantry
          return (
            <StepFive
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              handleCheckboxChangeShoppingListTwo={
                this.handleCheckboxChangeShoppingListTwo
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
              getNotesItem={this.getNotesItem}
              handleShoppingCartAmountChange={
                this.handleShoppingCartAmountChangeTwo
              }
              handleShoppingCartNotesChange={
                this.handleShoppingCartNotesChangeTwo
              }
              getTotal={this.getTotal}
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
