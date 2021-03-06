import React, { Component } from "react";
import { connect } from "react-redux";
import { getFoodProfile, sendShoppingLists } from "../../../actions/foodProfileActions";
import { getCurrentProfile } from "../../../actions/profileActions"
import Spinner from '../../common/Spinner';

import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import StepFour from "./StepFour"
import StepFive from "./StepFive"
import StepSix from "./StepSix"
import StepSeven from "./StepSeven"
import StepEight from "./StepEight"
import Complete from "./Complete"


class CreateProfile extends Component {
  state = {
    step: 1,
    shoppingListOne: [],
    shoppingListTwo: [],
    street: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    aptOrBldgNumber: "",
    deliveryDay: "",
    deliveryTime: "",
    phoneNumber: ""
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

  // Handle text fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  // Handle checkbox change
  handleOptionChange = changeEvent => {
    this.setState({
        [changeEvent.target.name]: changeEvent.target.value
    });
  };

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
        category: rawData[0].category,
        measurementUnit: rawData[0].measurementUnit,
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

  handleShoppingCartAmountChangeOne = input => e => {
    const { name, value } = e.target;
    var data = [...this.state.shoppingListOne];
    var index = data.findIndex(obj => obj.name === name);
    data[index].amount = value;
    this.setState({ data });
  };

  handleAmountIncreaseShoppingCartOne = (e) => {
    const { name } = e.target;
    var data = [...this.state.shoppingListOne];
    var index = data.findIndex(obj => obj.name === name);
    data[index].amount += .5
    this.setState({data})
  }

  handleAmountDecreaseShoppingCartOne = (e) => {
    const { name } = e.target;
    var data = [...this.state.shoppingListOne];
    var index = data.findIndex(obj => obj.name === name);
    if (data[index].amount === 1) {
      return this.setState({data})
    }
    data[index].amount -= .5
    this.setState({data})
  }

  handleCheckboxChangeShoppingListTwo = e => {
    if (e.target.checked) {
      const rawData = this.getNameItem(
        this.props.foodProfile.foodProfile,
        e.target.name
      );
      const shoppingListObject = {
        item_id: rawData[0].item_id,
        name: rawData[0].name,
        category: rawData[0].category,
        measurementUnit: rawData[0].measurementUnit,
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

  handleShoppingCartAmountChangeTwo = input => e => {
    const { name, value } = e.target;
    var data = [...this.state.shoppingListTwo];
    var index = data.findIndex(obj => obj.name === name);
    data[index].amount = value;
    this.setState({ data });
  };

  handleAmountIncreaseShoppingCartTwo = (e) => {
    const { name } = e.target;
    var data = [...this.state.shoppingListTwo];
    var index = data.findIndex(obj => obj.name === name);
    data[index].amount += 1
    this.setState({data})
  }

  handleAmountDecreaseShoppingCartTwo = (e) => {
    const { name } = e.target;
    var data = [...this.state.shoppingListTwo];
    var index = data.findIndex(obj => obj.name === name);
    if (data[index].amount === 1) {
      return this.setState({data})
    }
    data[index].amount -= 1
    this.setState({data})
  }

  getTotal = list => {
    let lower = 0;
    let upper = 0;
    for (var i = 0; i < this.state[list].length; i++) {
      lower += this.state[list][i].amount * this.state[list][i].lowPrice;
      upper += this.state[list][i].amount * this.state[list][i].upperPrice;
    }
    const result = `$ ${lower.toFixed(2)} - $ ${upper.toFixed(2)}`
    return result
  };

  clearShoppingList = () => {
    this.setState({
      shoppingListOne: []
    });
  }

  // Create submit for API
  createSubmit = () => {
    const payload = {
      shoppingListOne: this.state.shoppingListOne,
      shoppingListTwo: this.state.shoppingListTwo,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      zipcode: this.state.zipcode,
      aptOrBldgNumber: this.state.aptOrBldgNumber,
      deliveryDay: this.state.deliveryDay,
      deliveryTime: this.state.deliveryTime,
      phoneNumber: this.state.phoneNumber
    };
    this.props.sendShoppingLists(payload, this.props.history);
    console.log("SHOPPING LIST FUNCTION SUBMIT HIT")
  };

  render() {
    const { 
      shoppingListOne, 
      shoppingListTwo,
      street,
      city,
      state,
      country,
      zipcode,
      aptOrBldgNumber,
      deliveryDay,
      deliveryTime,
      phoneNumber
    } = this.state;
    const values = {
      shoppingListOne,
      shoppingListTwo,
      street,
      city,
      state,
      country,
      zipcode,
      aptOrBldgNumber,
      deliveryDay,
      deliveryTime,
      phoneNumber
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
          return <StepThree nextStep={this.nextStep} prevStep={this.prevStep} />;
        case 4:
          return <StepFour nextStep={this.nextStep} prevStep={this.prevStep} />;
        case 5:
          return (
            <StepFive
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
              handleAmountIncrease={this.handleAmountIncreaseShoppingCartOne}
              handleAmountDecrease={this.handleAmountDecreaseShoppingCartOne}
              handleShoppingCartNotesChange={
                this.handleShoppingCartNotesChangeOne
              }
              clearShoppingList={this.clearShoppingList}
              getTotal={this.getTotal}
            />
          );
        case 6:
          return (
            <StepSix
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              pantryItems={this.createPantryItems(
                this.props.foodProfile.foodProfile,
                this.props.profile.profile.foodProfile
              )}
              getCategoryItems={this.getCategoryItems}
              getNameItem={this.getNameItem}
              handleCheckboxChangeShoppingListTwo={
                this.handleCheckboxChangeShoppingListTwo
              }
              handleShoppingCartAmountChange={
                this.handleShoppingCartAmountChangeTwo
              }
              handleAmountIncrease={this.handleAmountIncreaseShoppingCartTwo}
              handleAmountDecrease={this.handleAmountDecreaseShoppingCartTwo}
              handleShoppingCartNotesChange={
                this.handleShoppingCartNotesChangeTwo
              }
              getTotal={this.getTotal}
            />
          );
        case 7:
          return (
            <StepSeven
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              handleChange={this.handleChange}
            />
          );
        case 8:
          return (
            <StepEight
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              handleChange={this.handleOptionChange}
            />
          );
        case 9:
          return (
            <Complete
              prevStep={this.prevStep}
              submit={this.createSubmit}
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
  { getFoodProfile, sendShoppingLists, getCurrentProfile }
)(CreateProfile);
