import React, { Component } from "react";
// import {Link} from "react-router-dom"
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"

class StepTwo extends Component {
  state = {
    selectedOption: "Chicken",
    openNote: ""
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

  // Handle Radio Buttons for category selection
  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
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

  createCategoryItems = category => {
    const items = this.props.getCategoryItems(this.props.pantryItems, category);
    const result = [];

    // Creates Check boxes
    for (let i = 0; i < items.length; i++) {
      result.push(
        <div key={items[i].name}>
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
    return result
  };

  toggleNotes = (e) => {
    const item = e.target.value;
    if (this.state.openNote !== item) {
      this.setState({
        openNote: item
      })
    } else {
      this.setState({
        openNote: ""
      })
    }
  }

  buildShoppingList = selectedPantryItems => {
    const result = [];

    for (let i = 0; i < selectedPantryItems.length; i++) {
      result.push(
        <li>
          {/* Container Div */}
          <div className=" flex shadow-lg p-2">
            {/* Button Flex */}
            <div className="w-2/12 self-center">
              <button className="border-transparent" name={selectedPantryItems[i].name} onClick={this.props.handleAmountDecrease}>-</button>
              <input className="w-1/2 text-center outline-none" 
                key={i}
                type="number" 
                name={selectedPantryItems[i].name}
                onChange={this.props.handleShoppingCartAmountChange(selectedPantryItems[i].name)}
                value={this.props.getNameItem(this.props.values.shoppingListOne, selectedPantryItems[i].name)[0].amount} 
              />
              <button className="border-none" name={selectedPantryItems[i].name} onClick={this.props.handleAmountIncrease}>+</button>
            </div>
            {/* Info Flex */}
            <div className="w-10/12">
              {/* Top Row */}
              <div className="flex justify-between">
                <p>{selectedPantryItems[i].measurementUnit} of</p>
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
              </div>
              {/* Bottom Row */}
              <div className="flex justify-between">
                <p>{selectedPantryItems[i].name}</p>
                <label className="notesCheckbox">
                  <input className="hidden" type="checkbox" value={selectedPantryItems[i].item_id} onClick={this.toggleNotes}/>
                  Notes
                </label>
              </div>
            </div>
          </div>
          { this.state.openNote === selectedPantryItems[i].item_id
          ? <div className="shadow-lg">
              <input className="w-full outline-none px-2" type="text" placeholder="Leave us a note. (ex. I want fuji apples)" name={selectedPantryItems[i].name}
              onChange={this.props.handleShoppingCartNotesChange(
                selectedPantryItems[i].name
              )}
              value={
                this.props.getNameItem(
                  this.props.values.shoppingListOne,
                  selectedPantryItems[i].name
                )[0].notes
              }/>
            </div>
          : <div className="hidden shadow-lg">
              <input className="w-full outline-none px-2" type="text" placeholder="Leave us a note. (ex. I want fuji apples)" name={selectedPantryItems[i].name}
              onChange={this.props.handleShoppingCartNotesChange(
                selectedPantryItems[i].name
              )}
              value={
                this.props.getNameItem(
                  this.props.values.shoppingListOne,
                  selectedPantryItems[i].name
                )[0].notes
              }/>
            </div>
          }
        </li>
      );
    }
    return result;
  };

  render() {
    return (
      <div>
        <Navbar/>
        <h3 className="text-center">Create your first shopping list</h3>
        <div className="container mx-auto flex justify-around">
          <div className="w-1/2">
            <h3>Pantry</h3>
            <ul className="flex flex-wrap">
              <li>
                <label className="px-4 py-2 shadow rounded-full">
                  <input
                    className="hidden"
                    type="radio"
                    name="react-tips"
                    value="Chicken"
                    checked={this.state.selectedOption === "Chicken"}
                    onChange={this.handleOptionChange}
                  />
                  Chicken
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="Beef"
                    checked={this.state.selectedOption === "Beef"}
                    onChange={this.handleOptionChange}
                  />
                  Beef
                </label>
              </li>
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="Pork"
                  checked={this.state.selectedOption === "Pork"}
                  onChange={this.handleOptionChange}
                />
                Pork
              </label>
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="Lamb"
                  checked={this.state.selectedOption === "Lamb"}
                  onChange={this.handleOptionChange}
                />
                Lamb
              </label>
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="Seafood"
                  checked={this.state.selectedOption === "Seafood"}
                  onChange={this.handleOptionChange}
                />
                Seafood
              </label>
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="Vegetable"
                  checked={this.state.selectedOption === "Vegetable"}
                  onChange={this.handleOptionChange}
                />
                Vegetables
              </label>
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="Fruit"
                  checked={this.state.selectedOption === "Fruit"}
                  onChange={this.handleOptionChange}
                />
                Fruits
              </label>
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="Alternative Protein"
                  checked={this.state.selectedOption === "Alternative Protein"}
                  onChange={this.handleOptionChange}
                />
                Alternative Proteins
              </label>
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="Grain"
                  checked={this.state.selectedOption === "Grain"}
                  onChange={this.handleOptionChange}
                />
                Grains
              </label>
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="Dairy"
                  checked={this.state.selectedOption === "Dairy"}
                  onChange={this.handleOptionChange}
                />
                Dairy
              </label>
            </ul>


            <div>Display Content</div>
            {this.createCategoryItems(this.state.selectedOption)}
          </div>
          <div>
            <h3>Shopping List</h3>
            <ul >
              {this.buildShoppingList(this.props.values.shoppingListOne)}
              {this.props.getTotal("shoppingListOne")}
            </ul>
          </div>
        </div>
        <Footer continue={this.continue} back={this.back}/>
      </div>
    );
  }
}

export default StepTwo;
