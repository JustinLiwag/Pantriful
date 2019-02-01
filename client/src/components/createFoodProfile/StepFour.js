import React, { Component } from "react";
import Checkbox from "./Checkbox";

class StepFour extends Component {
  state = {
    shownIndex: 1,
    shoppingListOpenIndex: 0
  };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  clickOpen = i => {
    console.log(i);
    if (this.state.shownIndex !== i) {
      this.setState({ shownIndex: i });
    }
    if (this.state.shownIndex === i) {
      this.setState({ shownIndex: -1 });
    }
  };

  // Handle Item Container Open/Close
  clickOpenShoppingList = i => {
    if (this.state.shoppingListOpenIndex !== i) {
      this.setState({ shoppingListOpenIndex: i });
    }
    if (this.state.shoppingListOpenIndex === i) {
      this.setState({ shoppingListOpenIndex: -1 });
    }
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

  buildShoppingList = selectedPantryItems => {
    const result = [];

    for (let i = 0; i < selectedPantryItems.length; i++) {
      result.push(
        <div key={selectedPantryItems[i].name + "container"}>
          <input
            key={i}
            name={selectedPantryItems[i].name}
            onChange={this.props.handleShoppingCartAmountChange(
              selectedPantryItems[i].name
            )}
            value={
              this.props.getNameItem(
                this.props.values.shoppingListOne,
                selectedPantryItems[i].item_id
              )[0].amount
            }
            className="shopping-cart-input"
            type="text"
            placeholder="Qty"
          />
          <p
            key={selectedPantryItems[i].name + "desc"}
            className="shopping-cart-p shopping-cart-description"
            onClick={() => this.clickOpenShoppingList(i)}
          >
            {selectedPantryItems[i].measurementUnit} of{" "}
            {selectedPantryItems[i].name}{" "}
            {this.props.getNameItem(
              this.props.values.shoppingListOne,
              selectedPantryItems[i].item_id
            )[0].notes ? (
              <span className="notes-highlight"> (Notes)</span>
            ) : null}
          </p>
          <p
            className="shopping-cart-p shopping-cart-price"
            onClick={() => this.clickOpenShoppingList(i)}
          >
            $ {selectedPantryItems[i].lowPrice * selectedPantryItems[i].amount}{" "}
            - ${" "}
            {selectedPantryItems[i].upperPrice * selectedPantryItems[i].amount}
            <span
              onClick={() => this.clickOpenShoppingList(i)}
              className={
                this.state.shoppingListOpenIndex === i
                  ? "arrow down"
                  : "arrow left"
              }
            />
          </p>
          <input
            key={selectedPantryItems[i].name + "notes"}
            name={selectedPantryItems[i].name}
            onChange={this.props.handleShoppingCartNotesChange(
              selectedPantryItems[i].name
            )}
            value={
              this.props.getNameItem(
                this.props.values.shoppingListOne,
                selectedPantryItems[i].item_id
              )[0].notes
            }
            id={
              this.state.shoppingListOpenIndex === i
                ? "shopping-cart-input-2"
                : "shopping-cart-input-2-display"
            }
            type="text"
            placeholder="Notes (e.g. I want fuji Apples)"
          />
        </div>
      );
    }
    return result;
  };

  render() {
    const {
      foodProfile,
      selectedValues,
      createCheckboxItems,
      pantry,
      values,
      handleCheckboxChangeShoppingListOne,
      getCategoryItems,
      shoppingListOne
    } = this.props;
    const { checkedShoppingItemsOne } = this.props.values;
    return (
      <div>
        <h1>Step Four: Your first shopping list!</h1>
        <div>
          <h1>Pantry</h1>
          <div className="toggle-container">
            <div className="toggle-section">
              <div onClick={() => this.clickOpen(1)} className="toggle-header">
                Chicken
              </div>
              <div
                key="chicken-container"
                className={
                  this.state.shownIndex === 1
                    ? "toggle-content showing"
                    : "toggle-content"
                }
              >
                {createCheckboxItems(
                  getCategoryItems(this.processPantryItems(pantry), "Chicken")
                ).map(item => (
                  <label key={item.name}>
                    <Checkbox
                      key={item.item_id}
                      type={"checkbox"}
                      name={item.name}
                      checked={this.shoppingListChecked(
                        values.shoppingListOne,
                        item.name
                      )}
                      onChange={handleCheckboxChangeShoppingListOne}
                    />
                    {item.label}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div />
        </div>
        <div className="container">
          <h1>Shopping List</h1>
          <div className="shopping-cart-container">
            {this.buildShoppingList(values.shoppingListOne)}
          </div>
          <p>{selectedValues}</p>
          {this.props.getTotal("shoppingListOne")}
        </div>
        <button onClick={this.back}>Back</button>
        <button onClick={this.continue}>Continue</button>
      </div>
    );
  }
}

export default StepFour;
