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

  render() {
    const {
      foodProfile,
      selectedValues,
      createCheckboxItems,
      pantry,
      values,
      handleCheckboxChangeShoppingListOne,
      getCategoryItems
    } = this.props;
    console.log(this.processPantryItems(pantry));
    console.log(pantry);
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
                      checked={values.checkedShoppingItemsOne.get(item.name)}
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
        <div>
          <h1>Shopping List</h1>
          <p>{selectedValues}</p>
        </div>
        <button onClick={this.back}>Back</button>
        <button onClick={this.continue}>Continue</button>
      </div>
    );
  }
}

export default StepFour;
