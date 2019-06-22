import React, { Component } from "react";
// import {Link} from "react-router-dom"
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"

class StepThree extends Component {
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
        <li className="w-1/3 flex mt-8" key={items[i].name}>
          <input
            className="hidden flex-grow content-center"
            id={items[i].name}
            type="checkbox"
            name={items[i].name}
            defaultChecked={this.shoppingListChecked(
              this.props.values.shoppingListTwo,
              items[i].name
            )}
            onChange={this.props.handleCheckboxChangeShoppingListTwo}
          />
          <label className="pl-4 text-xs" htmlFor={items[i].name}>{items[i].name}</label>
        </li>
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
        <li key={selectedPantryItems[i].name}>
          {/* Container Div */}
          <div className=" flex shadow-md px-4 py-2 border-l-4 border-orange-base mt-2">
            {/* Button Flex */}
            <div className="w-2/12 justify-between self-center mr-4">
              <button className="focus:outline-none text-2xl font-bold text-orange-base" name={selectedPantryItems[i].name} onClick={this.props.handleAmountDecrease}>-</button>
              <input className="w-1/2 text-center outline-none text-2xl" 
                key={i}
                type="number" 
                name={selectedPantryItems[i].name}
                onChange={this.props.handleShoppingCartAmountChange(selectedPantryItems[i].name)}
                value={this.props.getNameItem(this.props.values.shoppingListTwo, selectedPantryItems[i].name)[0].amount} 
              />
              <button className="focus:outline-none text-2xl font-bold text-orange-base" name={selectedPantryItems[i].name} onClick={this.props.handleAmountIncrease}>+</button>
            </div>
            {/* Info Flex */}
            <div className="w-10/12">
              {/* Top Row */}
              <div className="flex justify-between">
                <p className="text-xs text-gray-500 font-bold self-center tracking-wider">{selectedPantryItems[i].measurementUnit} of</p>
                <p className="italic text-md text-gray-600 font-bold">
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
                </p>
              </div>
              {/* Bottom Row */}
              <div className="flex justify-between">
                <p className="text-orange-base font-bold text-xl">{selectedPantryItems[i].name}</p>
                { this.props.getNameItem(
                  this.props.values.shoppingListTwo,
                  selectedPantryItems[i].name
                  )[0].notes
                  ? <label 
                      className="notesCheckbox text-green-button font-bold text-md self-center">
                      <input className="hidden " type="checkbox" value={selectedPantryItems[i].item_id} onClick={this.toggleNotes}/>
                      Notes 
                    </label>
                  :
                    <label 
                      className="notesCheckbox text-orange-base opacity-75 font-bold text-md self-center">
                      <input className="hidden " type="checkbox" value={selectedPantryItems[i].item_id} onClick={this.toggleNotes}/>
                      Notes 
                    </label>
                }
              </div>
            </div>
          </div>
          { this.state.openNote === selectedPantryItems[i].item_id
          ? <div className="shadow-lg">
              <input className="w-full outline-none p-4 text-orange-base font-bold border-l-4 border-orange-base" type="text" placeholder="Leave us a note. (ex. I want fuji apples)" name={selectedPantryItems[i].name}
              onChange={this.props.handleShoppingCartNotesChange(
                selectedPantryItems[i].name
              )}
              value={
                this.props.getNameItem(
                  this.props.values.shoppingListTwo,
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
                  this.props.values.shoppingListTwo,
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
        <h3 className="text-center text-2xl md:text-3xl mt-4 mb-8 md:mt-0 font-bold text-gray-600">Create your <span className="text-orange-base">second</span> shopping list.</h3>
        <div className="container mx-auto flex justify-between w-3/4 mb-48">
          <div className="pantry-container w-1/2 mr-8">
            <h3 className="hidden md:block shopping-cart-pantry-title">YOUR PANTRY</h3>
            <ul className="flex flex-wrap items-center pantry-categories">
              <li className="w-xl mx-2 mb-4 mt-2">
                <label >
                  <input
                    className="hidden"
                    type="radio"
                    name="category"
                    value="Chicken"
                    checked={this.state.selectedOption === "Chicken"}
                    onChange={this.handleOptionChange}
                  />
                  <span className="px-4 py-3 shadow-md rounded-full">
                    <img className="inline mr-2" src="/images/on-boarding/category-items/Chicken.png" alt=""></img>
                    <p className="font-bold inline italic">Chicken</p>
                  </span>
                </label>
              </li>
              <li className="w-xl mx-2 mb-4 mt-2">
                <label>
                  <input
                    className="hidden"
                    type="radio"
                    name="category"
                    value="Beef"
                    checked={this.state.selectedOption === "Beef"}
                    onChange={this.handleOptionChange}
                  />
                  <span className="px-4 py-3 shadow-md rounded-full">
                    <img className="inline mr-2" src="/images/on-boarding/category-items/Beef.png" alt=""></img>
                    <p className="font-bold inline italic">Beef</p>
                  </span>
                </label>
              </li>
              <li className="w-xl mx-2 mb-4 mt-2">
                <label>
                  <input
                    className="hidden"
                    type="radio"
                    name="category"
                    value="Pork"
                    checked={this.state.selectedOption === "Pork"}
                    onChange={this.handleOptionChange}
                  />
                  <span className="px-4 py-3 shadow-md rounded-full">
                    <img className="inline mr-2" src="/images/on-boarding/category-items/Pork.png" alt=""></img>
                    <p className="font-bold inline italic">Pork</p>
                  </span>
                </label>
              </li>
              <li className="w-xl mx-2 mb-4 mt-2">
                <label>
                  <input
                    className="hidden"
                    type="radio"
                    name="category"
                    value="Lamb"
                    checked={this.state.selectedOption === "Lamb"}
                    onChange={this.handleOptionChange}
                  />
                  <span className="px-4 py-3 shadow-md rounded-full">
                    <img className="inline mr-2" src="/images/on-boarding/category-items/Lamb.png" alt=""></img>
                    <p className="font-bold inline italic">Lamb</p>
                  </span>
                </label>
              </li>
              <li className="w-xl mx-2 mb-4 mt-2">
                <label>
                  <input
                    className="hidden"
                    type="radio"
                    name="category"
                    value="Seafood"
                    checked={this.state.selectedOption === "Seafood"}
                    onChange={this.handleOptionChange}
                  />
                  <span className="px-4 py-3 shadow-md rounded-full">
                    <img className="inline mr-2" src="/images/on-boarding/category-items/Seafood.png" alt=""></img>
                    <p className="font-bold inline italic">Seafood</p>
                  </span>
                </label>
              </li>
              <li className="w-xl mx-2 mb-4 mt-2">
                <label>
                  <input
                    className="hidden"
                    type="radio"
                    name="category"
                    value="Vegetable"
                    checked={this.state.selectedOption === "Vegetable"}
                    onChange={this.handleOptionChange}
                  />
                  <span className="px-4 py-3 shadow-md rounded-full">
                    <img className="inline mr-2" src="/images/on-boarding/category-items/Vegetable.png" alt=""></img>
                    <p className="font-bold inline italic">Vegetables</p>
                  </span>
                </label>
              </li>
              <li className="w-xl mx-2 mb-4 mt-2">
                <label >
                  <input
                    className="hidden"
                    type="radio"
                    name="category"
                    value="Fruit"
                    checked={this.state.selectedOption === "Fruit"}
                    onChange={this.handleOptionChange}
                  />
                  <span className="px-4 py-3 shadow-md rounded-full">
                    <img className="inline mr-2" src="/images/on-boarding/category-items/Fruit.png" alt=""></img>
                    <p className="font-bold inline italic">Fruits</p>
                  </span>
                </label>
              </li>
              <li className="w-xl mx-2 mb-4 mt-2">
                <label >
                  <input
                    className="hidden"
                    type="radio"
                    name="category"
                    value="Alternative Proteins"
                    checked={this.state.selectedOption === "Alternative Proteins"}
                    onChange={this.handleOptionChange}
                  />
                  <span className="px-4 py-3 shadow-md rounded-full">
                    <img className="inline mr-2" src="/images/on-boarding/category-items/AlternativeProtein.png" alt=""></img>
                    <p className="font-bold inline italic">Alternative Proteins</p>
                  </span>
                </label>
              </li>
              <li className="w-xl mx-2 mb-4 mt-2">
                <label>
                  <input
                    className="hidden"
                    type="radio"
                    name="category"
                    value="Grain"
                    checked={this.state.selectedOption === "Grain"}
                    onChange={this.handleOptionChange}
                  />
                  <span className="px-4 py-3 shadow-md rounded-full">
                    <img className="inline mr-2" src="/images/on-boarding/category-items/Grain.png" alt=""></img>
                    <p className="font-bold inline italic">Grains</p>
                  </span>
                </label>
              </li>
              <li className="w-xl mx-2 mb-4 mt-2">
                <label>
                  <input
                    className="hidden"
                    type="radio"
                    name="category"
                    value="Dairy"
                    checked={this.state.selectedOption === "Dairy"}
                    onChange={this.handleOptionChange}
                  />
                  <span className="px-4 py-3 shadow-md rounded-full">
                    <img className="inline mr-2" src="/images/on-boarding/category-items/Dairy.png" alt=""></img>
                    <p className="font-bold inline italic">Dairy</p>
                  </span>
                </label>
              </li>
            </ul>
            <ul className="flex flex-wrap justify-between pantry__checkboxContainer pl-4">
              {this.createCategoryItems(this.state.selectedOption)} 
            </ul>
          </div>
          <div className="w-1/2">
            <ul >
              {this.props.values.shoppingListTwo.length === 0 
              ? <div className="mb-8">
                  <img className="mt-8 block mx-auto" src="/images/on-boarding/category-items/empty-cart.png" alt=""></img>
                  <p className="mt-2 text-lg text-gray-400 text-center w-1/2 mx-auto font-bold">Add items from your pantry to your shopping list.</p>
                </div>
              : this.buildShoppingList(this.props.values.shoppingListTwo)}
            </ul>
              {this.props.getTotal("shoppingListTwo")}
          </div>
        </div>
        <Footer continue={this.continue} back={this.back}/>
      </div>
    );
  }
}

export default StepThree;
