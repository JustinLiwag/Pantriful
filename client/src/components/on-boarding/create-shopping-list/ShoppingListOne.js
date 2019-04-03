import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Checkbox from "../utilities/Checkbox";

class ShoppingListOne extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  processPantryItems = pantry => {
    const result = [];
    for (var i = 0; i < pantry.length; i++) {
      result.push(pantry[i][0]);
    }
    return result;
  };

  shoppingListChecked = (shoppingList, item) => {
    if (this.props.getNameItem(shoppingList, item).length < 1) {
      return false;
    }
    if (this.props.getNameItem(shoppingList, item)) {
      return true;
    }
    return false;
  };

  // Creates the tabs and all the check boxes for a category
  createPantryTab = category => {
    const tabName = `${category}tab`;
    const items = this.props.getCategoryItems(this.props.pantryItems, category);

    const result = [];

    // Creates Check boxes
    for (let i = 0; i < items.length; i++) {
      result.push(
        <div key={i}>
          <input
            id={items[i].name}
            type="checkbox"
            name={items[i].name}
            defaultChecked={this.shoppingListChecked(
              this.props.values.shoppingListOne,
              items[i].name
            )}
            onChange={this.props.handleCheckboxChangeShoppingListOne}
          />
          <label htmlFor={items[i].name}>{items[i].name}</label>
        </div>
      );
    }

    // Creates Tabs + Check boxes
    return (
      <div className="pantry__tab">
        <input id={tabName} type="radio" name="tabs" />
        <label htmlFor={tabName}>{category}</label>
        <div className="pantry__tabFunctions pantry__checkboxContainer">
          {result}
        </div>
      </div>
    );
  };

  buildShoppingList = selectedPantryItems => {
    const result = [];

    for (let i = 0; i < selectedPantryItems.length; i++) {
        let notesName = `${selectedPantryItems[i].item_id}notes`;
      result.push(
        <div key={i} className="shoppingList__item">
          <input
            key={i}
            name={selectedPantryItems[i].name}
            onChange={this.props.handleShoppingCartAmountChange(
              selectedPantryItems[i].name
            )}
            value={
              this.props.getNameItem(
                this.props.values.shoppingListOne,
                selectedPantryItems[i].name
              )[0].amount
            }
            className="shoppingList__item__quantityInput"
            type="number"
            placeholder="Qty"
          />
          <input
            className="shoppingList__item__notesOpen"
            id={notesName}
            type="checkbox"
          />
          <label
            htmlFor={notesName}
            className="shoppingList__item__labels shoppingList__item__description"
          >
            {selectedPantryItems[i].measurementUnit} of{" "}
            {selectedPantryItems[i].name}{" "}
          </label>
          <label
            htmlFor={notesName}
            className="shoppingList__item__labels shoppingList__item__price"
          >
            ${" "}
            {(
              selectedPantryItems[i].lowPrice *
              selectedPantryItems[i].amount
            ).toFixed(2)}{" "}
            - ${" "}
            {(
              selectedPantryItems[i].upperPrice *
              selectedPantryItems[i].amount
            ).toFixed(2)}
            <span className="arrow" />
          </label>
          <div className="shoppingList__item__notesContainer">
            <input
              className="shoppingList__item__notesContainer__notesInput"
              key={selectedPantryItems[i].name + "notes"}
              name={selectedPantryItems[i].name}
              onChange={this.props.handleShoppingCartNotesChange(
                selectedPantryItems[i].name
              )}
              value={
                this.props.getNameItem(
                  this.props.values.shoppingListOne,
                  selectedPantryItems[i].name
                )[0].notes
              }
              type="text"
              placeholder="Notes (e.g. I want fuji Apples)"
            />
          </div>
        </div>
      );
    }
    return result;
  };

  

  render() {
    return (
      <div>
        <div className="on-boarding-nav">
          <button onClick={this.back}>Back</button>
          <Link to="/">
            <img src="images/on-boarding-logo.png" alt="" />
          </Link>
        </div>

        <div className="on-boarding-container container stepOneShoppingCart">
          <h2>Shopping List One</h2>
          <p>Create your first shopping list here.</p>
        </div>

        <div className="shoppingListWrapper">
          <div>
            <h1>Your Pantry</h1>

            {this.createPantryTab("Chicken")}
            {this.createPantryTab("Beef")}
            {this.createPantryTab("Pork")}
            {this.createPantryTab("Lamb")}
            {this.createPantryTab("Seafood")}
            {this.createPantryTab("Vegetable")}
            {this.createPantryTab("Fruit")}
            {this.createPantryTab("Alternative Protein")}
            {this.createPantryTab("Grains")}
            {this.createPantryTab("Dairy")}
          </div>

          <div>
            <h1>Shopping List One</h1>

            <div className="shoppingList__headers">
              <h2>Edit Qty</h2>
              <h2>Item</h2>
              <h2>Price per unit</h2>
            </div>

            <div>
              {this.buildShoppingList(this.props.values.shoppingListOne)}
            </div>

            <div className="shoppingList__total">
              {this.props.getTotal("shoppingListOne")}
            </div>
          </div>
         
        </div>
        <div className="container">
          <button className="main-button" onClick={this.continue}>
            Next
          </button>
        </div> 
      </div>
    );
  }
}

export default ShoppingListOne;
