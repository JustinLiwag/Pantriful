import React, { Component } from "react";
import Checkbox from "./Checkbox";

class StepFour extends Component {
  state = {
    shownIndex: 1
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
    if (this.state.shownIndex !== i) {
      this.setState({ shownIndex: i });
    }
    if (this.state.shownIndex === i) {
      this.setState({ shownIndex: -1 });
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
    console.log("SHOPPING LIST STATE:", shoppingList);
    console.log("ITEM: ", item);
    console.log(this.props.getNameItem(shoppingList, item));
    if (this.props.getNameItem(shoppingList, item).length < 1) {
      return false;
    }
    if (this.props.getNameItem(shoppingList, item)) {
      console.log(this.props.getNameItem(shoppingList, item)[0]);
      return true;
    }
    return false;
  };

  buildShoppingList = selectedPantryItems => {
    const result = [];
    for (var i = 0; i < selectedPantryItems.length; i++) {
      result.push(
        <div key={i}>
          <input
            className="shopping-cart-input"
            type="text"
            placeholder="Qty"
          />
          <p className="shopping-cart-p shopping-cart-description">
            {selectedPantryItems[i].measurementUnit} of{" "}
            {selectedPantryItems[i].name}
          </p>
          <p className="shopping-cart-p shopping-cart-price">
            $ {selectedPantryItems[i].lowPrice} - ${" "}
            {selectedPantryItems[i].upperPrice}
            <span className="arrow down" />
            {/*<span className="arrow left" />*/}
          </p>
          <input
            id="shopping-cart-input-2"
            type="text"
            placeholder="Notes (e.g. I want fuji Apples)"
          />
        </div>
      );
    }
    return result;
  };

  render() {
    console.log(this);
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
        </div>
        <button onClick={this.back}>Back</button>
        <button onClick={this.continue}>Continue</button>
      </div>
    );
  }
}

export default StepFour;
