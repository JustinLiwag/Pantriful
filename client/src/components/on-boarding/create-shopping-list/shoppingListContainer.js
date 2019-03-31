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
import StepSix from "./StepSix"
import ShoppingListOne from "./ShoppingListOne";
import ShoppingListTwo from "./ShoppingListTwo";

class CreateProfile extends Component {
  state = {
    step: 7,
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

  // TODO
  // 1. Get Master Food Profile [DONE]
  // 2. Get Selected Items from pantry [DONE]
  // 3. Create detailed selected items for pantry (Selected items + Master food profile) [DONE]
  // 4. Create Checkboxes [DONE]
  // 5. Create Shopping List functionality

  // Create detailed selected items list (price, quantity, etc)
  createPantryItems = (masterFoodProfile, selectedItems) => {
    const result = [];
    for (let i = 0; i < selectedItems.length; i++) {
      result.push(masterFoodProfile.find(o => o.name === selectedItems[i]));
    }
    return result;
  };

  // filter items by category
  getCategoryItems = (array, value) => {
    const result = array.filter(item => item.category.indexOf(value) !== -1);
    return result;
  };

  getNameItem = (array, name) => {
    const result = array.filter(item => item.name.indexOf(name) !== -1);
    return result;
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
      console.log(newArray);
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

  handleShoppingCartAmountChangeOne = input => e => {
    const { name, value } = e.target;
    var data = [...this.state.shoppingListOne];
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

  getTotal = list => {
    let lower = 0;
    let upper = 0;
    for (var i = 0; i < this.state[list].length; i++) {
      lower += this.state[list][i].amount * this.state[list][i].lowPrice;
      upper += this.state[list][i].amount * this.state[list][i].upperPrice;
    }
    return (
      <p className="shoppingList__total" key="total">
        Estimated Total: $ {lower.toFixed(2)} - $ {upper.toFixed(2)}
      </p>
    );
  };

  render() {
    const { shoppingListOne, shoppingListTwo } = this.state;
    const values = {
      shoppingListOne,
      shoppingListTwo
    };
    if (
      this.props.foodProfile.foodProfile === null ||
      this.props.foodProfile.loading
    ) {
      return <Spinner />;
    } else {
      switch (this.state.step) {
        case 1:
          return <StepOne nextStep={this.nextStep} prevStep={this.prevStep} />;
        case 2:
          return <StepTwo nextStep={this.nextStep} prevStep={this.prevStep} />;
        case 3:
          return (
            <StepThree nextStep={this.nextStep} prevStep={this.prevStep} />
          );
        case 4:
          return <StepFour nextStep={this.nextStep} prevStep={this.prevStep} />;
        case 5:
          return <StepFive nextStep={this.nextStep} prevStep={this.prevStep} />;
        case 6:
          return <StepSix nextStep={this.nextStep} prevStep={this.prevStep} />;
        case 7:
          return (
            <ShoppingListOne
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              pantryItems={this.createPantryItems(
                this.props.foodProfile.foodProfile,
                this.props.profile.profile.foodProfile
              )}
              getCategoryItems={this.getCategoryItems}
              getNameItem={this.getNameItem}
              handleCheckboxChangeShoppingListOne={
                this.handleCheckboxChangeShoppingListOne
              }
              handleShoppingCartAmountChange={
                this.handleShoppingCartAmountChangeOne
              }
              handleShoppingCartNotesChange={
                this.handleShoppingCartNotesChangeOne
              }
              getTotal={this.getTotal}
            />
          );
        case 8:
          return (
            <ShoppingListTwo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
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
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getFoodProfile, sendFoodProfile, getCurrentProfile }
)(CreateProfile);
