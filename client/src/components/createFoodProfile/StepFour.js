import React, { Component } from "react";
import Checkbox from "./Checkbox";

class StepFour extends Component {
  state = {
    shownIndex: 1,
    shoppingListOpenIndex: 0
  };

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
        <div className="shopping-list-item" key={selectedPantryItems[i].name + "container"}>
          <input 
            key={i} 
            name={selectedPantryItems[i].name} 
            onChange={this.props.handleShoppingCartAmountChange(selectedPantryItems[i].name)}
            value={this.props.getNameItem(this.props.values.shoppingListOne,selectedPantryItems[i].item_id)[0].amount}
            className="shopping-cart-input"
            type="number"
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
              <span className="notes-highlight"> (N)</span>
            ) : null}
          </p>
          <p
            className="shopping-cart-p shopping-cart-price"
            onClick={() => this.clickOpenShoppingList(i)}
          >
            $ {(selectedPantryItems[i].lowPrice * selectedPantryItems[i].amount).toFixed(2)}{" "}
            - ${" "}
            {(selectedPantryItems[i].upperPrice * selectedPantryItems[i].amount).toFixed(2)}
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
      selectedValues,
      createCheckboxItems,
      pantry,
      values,
      handleCheckboxChangeShoppingListOne,
      getCategoryItems
    } = this.props;
    return (
      <div className="on-boarding-container container">
        <img
          className="on-boarding-steps"
          src="images/on-boarding-4.jpg"
          alt=""
        />
        <a onClick={this.back} className="back-button" href="">
          &lt; Back
        </a>
        <h1 className="on-boarding-title">Your first two shopping lists!</h1>
        <p className="on-boarding-description">
          Now that you have built your pantry, let’s create two shopping lists.
          This will help us determine how your diet breaks down on a week to
          week basis and lets us know how you typically eat. You can update the
          quantity and leave us a note on each item if you have anything you
          would like us to know about your item.
        </p>

        {/*Split sections*/}
        <div className="on-boarding-shopping-cart">
          {/*PANTRY SECTION*/}
          <div>
            <h1>Your Pantry</h1>
            <div className="toggle-container">
              {/*Chicken*/}
              <div className="toggle-section">
                <div
                  onClick={() => this.clickOpen(1)}
                  className="toggle-header"
                >
                  Chicken
                </div>
                <div
                  key="chicken-container"
                  className={
                    this.state.shownIndex === 1
                      ? "toggle-content showing checkbox-container pantry"
                      : "toggle-content checkbox-container pantry"
                  }
                >
                  {createCheckboxItems(
                    getCategoryItems(this.processPantryItems(pantry), "Chicken")
                  ).map(item => (
                    <div>
                      <Checkbox
                        id={item.name}
                        key={item.item_id}
                        type={"checkbox"}
                        name={item.name}
                        checked={this.shoppingListChecked(
                          values.shoppingListOne,
                          item.name
                        )}
                        onChange={handleCheckboxChangeShoppingListOne}
                      />
                      <label for={item.name} key={item.name}>
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/*Beef*/}
              <div className="toggle-section">
                <div
                  onClick={() => this.clickOpen(2)}
                  className="toggle-header"
                >
                  Beef
                </div>
                <div
                  key="chicken-container"
                  className={
                    this.state.shownIndex === 2
                      ? "toggle-content showing checkbox-container pantry"
                      : "toggle-content checkbox-container pantry"
                  }
                >
                  {createCheckboxItems(
                    getCategoryItems(this.processPantryItems(pantry), "Beef")
                  ).map(item => (
                    <div>
                      <Checkbox
                        id={item.name}
                        key={item.item_id}
                        type={"checkbox"}
                        name={item.name}
                        checked={this.shoppingListChecked(
                          values.shoppingListOne,
                          item.name
                        )}
                        onChange={handleCheckboxChangeShoppingListOne}
                      />
                      <label for={item.name} key={item.name}>
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/*Pork*/}
              <div className="toggle-section">
                <div
                  onClick={() => this.clickOpen(3)}
                  className="toggle-header"
                >
                  Pork
                </div>
                <div
                  key="chicken-container"
                  className={
                    this.state.shownIndex === 3
                      ? "toggle-content showing checkbox-container pantry"
                      : "toggle-content checkbox-container pantry"
                  }
                >
                  {createCheckboxItems(
                    getCategoryItems(this.processPantryItems(pantry), "Pork")
                  ).map(item => (
                    <div>
                      <Checkbox
                        id={item.name}
                        key={item.item_id}
                        type={"checkbox"}
                        name={item.name}
                        checked={this.shoppingListChecked(
                          values.shoppingListOne,
                          item.name
                        )}
                        onChange={handleCheckboxChangeShoppingListOne}
                      />
                      <label for={item.name} key={item.name}>
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/*Lamb and Turkey*/}
              <div className="toggle-section">
                <div
                  onClick={() => this.clickOpen(4)}
                  className="toggle-header"
                >
                  Lamb and Turkey
                </div>
                <div
                  key="chicken-container"
                  className={
                    this.state.shownIndex === 4
                      ? "toggle-content showing checkbox-container pantry"
                      : "toggle-content checkbox-container pantry"
                  }
                >
                  {createCheckboxItems(
                    getCategoryItems(this.processPantryItems(pantry), "Lamb")
                  ).map(item => (
                    <div>
                      <Checkbox
                        id={item.name}
                        key={item.item_id}
                        type={"checkbox"}
                        name={item.name}
                        checked={this.shoppingListChecked(
                          values.shoppingListOne,
                          item.name
                        )}
                        onChange={handleCheckboxChangeShoppingListOne}
                      />
                      <label for={item.name} key={item.name}>
                        {item.label}
                      </label>
                    </div>
                  ))}

                  {createCheckboxItems(
                    getCategoryItems(this.processPantryItems(pantry), "Turkey")
                  ).map(item => (
                    <div>
                      <Checkbox
                        id={item.name}
                        key={item.item_id}
                        type={"checkbox"}
                        name={item.name}
                        checked={this.shoppingListChecked(
                          values.shoppingListOne,
                          item.name
                        )}
                        onChange={handleCheckboxChangeShoppingListOne}
                      />
                      <label for={item.name} key={item.name}>
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/*Seafood*/}
              <div className="toggle-section">
                <div
                  onClick={() => this.clickOpen(5)}
                  className="toggle-header"
                >
                  Seafood
                </div>
                <div
                  key="chicken-container"
                  className={
                    this.state.shownIndex === 5
                      ? "toggle-content showing checkbox-container pantry"
                      : "toggle-content checkbox-container pantry"
                  }
                >
                  {createCheckboxItems(
                    getCategoryItems(this.processPantryItems(pantry), "Seafood")
                  ).map(item => (
                    <div>
                      <Checkbox
                        id={item.name}
                        key={item.item_id}
                        type={"checkbox"}
                        name={item.name}
                        checked={this.shoppingListChecked(
                          values.shoppingListOne,
                          item.name
                        )}
                        onChange={handleCheckboxChangeShoppingListOne}
                      />
                      <label for={item.name} key={item.name}>
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/*Grains*/}
              <div className="toggle-section">
                <div
                  onClick={() => this.clickOpen(6)}
                  className="toggle-header"
                >
                  Grains
                </div>
                <div
                  key="chicken-container"
                  className={
                    this.state.shownIndex === 6
                      ? "toggle-content showing checkbox-container pantry"
                      : "toggle-content checkbox-container pantry"
                  }
                >
                  {createCheckboxItems(
                    getCategoryItems(this.processPantryItems(pantry), "Grains")
                  ).map(item => (
                    <div>
                      <Checkbox
                        id={item.name}
                        key={item.item_id}
                        type={"checkbox"}
                        name={item.name}
                        checked={this.shoppingListChecked(
                          values.shoppingListOne,
                          item.name
                        )}
                        onChange={handleCheckboxChangeShoppingListOne}
                      />
                      <label for={item.name} key={item.name}>
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/*Dairy*/}
              <div className="toggle-section">
                <div
                  onClick={() => this.clickOpen(7)}
                  className="toggle-header"
                >
                  Dairy
                </div>
                <div
                  key="chicken-container"
                  className={
                    this.state.shownIndex === 7
                      ? "toggle-content showing checkbox-container pantry"
                      : "toggle-content checkbox-container pantry"
                  }
                >
                  {createCheckboxItems(
                    getCategoryItems(this.processPantryItems(pantry), "Dairy")
                  ).map(item => (
                    <div>
                      <Checkbox
                        id={item.name}
                        key={item.item_id}
                        type={"checkbox"}
                        name={item.name}
                        checked={this.shoppingListChecked(
                          values.shoppingListOne,
                          item.name
                        )}
                        onChange={handleCheckboxChangeShoppingListOne}
                      />
                      <label for={item.name} key={item.name}>
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/*Alternative Protein*/}
              <div className="toggle-section">
                <div
                  onClick={() => this.clickOpen(8)}
                  className="toggle-header"
                >
                  Alternative Protein
                </div>
                <div
                  key="chicken-container"
                  className={
                    this.state.shownIndex === 8
                      ? "toggle-content showing checkbox-container pantry"
                      : "toggle-content checkbox-container pantry"
                  }
                >
                  {createCheckboxItems(
                    getCategoryItems(
                      this.processPantryItems(pantry),
                      "Alternative Protein"
                    )
                  ).map(item => (
                    <div>
                      <Checkbox
                        id={item.name}
                        key={item.item_id}
                        type={"checkbox"}
                        name={item.name}
                        checked={this.shoppingListChecked(
                          values.shoppingListOne,
                          item.name
                        )}
                        onChange={handleCheckboxChangeShoppingListOne}
                      />
                      <label for={item.name} key={item.name}>
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/*Vegetables*/}
              <div className="toggle-section">
                <div
                  onClick={() => this.clickOpen(9)}
                  className="toggle-header"
                >
                  Vegetables
                </div>
                <div
                  key="chicken-container"
                  className={
                    this.state.shownIndex === 9
                      ? "toggle-content showing checkbox-container pantry"
                      : "toggle-content checkbox-container pantry"
                  }
                >
                  {createCheckboxItems(
                    getCategoryItems(
                      this.processPantryItems(pantry),
                      "Vegetables"
                    )
                  ).map(item => (
                    <div>
                      <Checkbox
                        id={item.name}
                        key={item.item_id}
                        type={"checkbox"}
                        name={item.name}
                        checked={this.shoppingListChecked(
                          values.shoppingListOne,
                          item.name
                        )}
                        onChange={handleCheckboxChangeShoppingListOne}
                      />
                      <label for={item.name} key={item.name}>
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/*Fruit*/}
              <div className="toggle-section">
                <div
                  onClick={() => this.clickOpen(10)}
                  className="toggle-header"
                >
                  Fruit
                </div>
                <div
                  key="chicken-container"
                  className={
                    this.state.shownIndex === 10
                      ? "toggle-content showing checkbox-container pantry"
                      : "toggle-content checkbox-container pantry"
                  }
                >
                  {createCheckboxItems(
                    getCategoryItems(
                      this.processPantryItems(pantry),
                      "Fruit"
                    )
                  ).map(item => (
                    <div>
                      <Checkbox
                        id={item.name}
                        key={item.item_id}
                        type={"checkbox"}
                        name={item.name}
                        checked={this.shoppingListChecked(
                          values.shoppingListOne,
                          item.name
                        )}
                        onChange={handleCheckboxChangeShoppingListOne}
                      />
                      <label for={item.name} key={item.name}>
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/*Shopping List*/}
          <div>
            <h1>Your first grocery list</h1>
            <div className="shopping-list-headers">
              <p>Qty</p>
              <p>Item</p>
              <p>Price</p>
            </div>
            <div className="shopping-cart-container">
              {this.buildShoppingList(values.shoppingListOne)}
            </div>
            <p>{selectedValues}</p>
            {this.props.getTotal("shoppingListOne")}
          </div>

          {/*Shopping cart container end*/}
        </div>

        <div className="on-boarding-button-container">
          <button className="on-boarding-button-back" onClick={this.back}>
          Back
          </button>
          <button className="on-boarding-button" onClick={this.continue}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default StepFour;
