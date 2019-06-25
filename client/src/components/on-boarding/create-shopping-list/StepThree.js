import React, { Component } from "react";
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"
import Modal from 'react-responsive-modal';
import onBoarding from "../../../css/On-boarding.css"

class StepThree extends Component {
  state = {
    selectedOption: "Chicken",
    openNote: "",
    open: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

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
        <li className="w-1/2 md:w-1/3 flex mt-8" key={items[i].name}>
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
          <label className="px-4 md:pl-4 text-xs md:text-sm" htmlFor={items[i].name}>{items[i].name}</label>
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
          <div className="flex shadow-md px-4 py-2 border-l-4 border-orange-base mt-2">
            {/* Button Flex */}
            <div className="w-2/12 justify-between self-center mr-4">
              <button className="focus:outline-none md:text-2xl font-bold text-orange-base" name={selectedPantryItems[i].name} onClick={this.props.handleAmountDecrease}>-</button>
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
                <p className="text-orange-base font-bold md:text-xl">{selectedPantryItems[i].name}</p>
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

  buildMobileShoppingList = selectedPantryItems => {
    const result = [];

    for (let i = 0; i < selectedPantryItems.length; i++) {
      result.push(
        <li className="mt-2">
          <div className="shadow-md px-2 py-1 border-l-4 border-orange-base">
            <div className="flex">
              {/* Quantity Button */}
              <div className="flex w-4/12">
                <button className="w-2/12 focus:outline-none text-2xl font-bold text-orange-base" name={selectedPantryItems[i].name} onClick={this.props.handleAmountDecrease}>-</button>
                <input className="w-6/12 text-center outline-none text-2xl"
                  key={i}
                  type="number"
                  name={selectedPantryItems[i].name}
                  onChange={this.props.handleShoppingCartAmountChange(selectedPantryItems[i].name)}
                  value={this.props.getNameItem(this.props.values.shoppingListTwo, selectedPantryItems[i].name)[0].amount}
                />
                <button className="w-2/12 focus:outline-none text-2xl font-bold text-orange-base" name={selectedPantryItems[i].name} onClick={this.props.handleAmountIncrease}>+</button>
              </div>
              {/* Measurement */}
              <p className="text-xs text-gray-500 mt-1 font-bold self-center tracking-wider">{selectedPantryItems[i].measurementUnit} of</p>
            </div>
            {/* Item Name */}
            <div><p className="text-orange-base font-bold text-md md:text-xl">{selectedPantryItems[i].name}</p></div>
            <div className="flex justify-between items-center">
              {/* Price */}
              <div>
                <p className="italic text-xs md:text-md text-gray-600 font-bold">
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
              {/* Notes */}
              <div>
                {this.props.getNameItem(
                  this.props.values.shoppingListTwo,
                  selectedPantryItems[i].name)[0].notes
                  ? <label className="notesCheckbox text-green-button font-bold text-sm xs:text-md self-center">
                    <input className="hidden " type="checkbox" value={selectedPantryItems[i].item_id} onClick={this.toggleNotes} />
                    Notes
                  </label>
                  : <label className="notesCheckbox text-orange-base opacity-75 font-bold text-sm xs:text-md self-center">
                    <input className="hidden " type="checkbox" value={selectedPantryItems[i].item_id} onClick={this.toggleNotes} />
                    Notes
                  </label>
                }
              </div>
            </div>
          </div>
          {this.state.openNote === selectedPantryItems[i].item_id
            ? <div className="shadow-lg">
              <input className="w-full outline-none p-2 text-orange-base font-bold border-l-4 border-orange-base" type="text" placeholder="Leave us a note." name={selectedPantryItems[i].name}
                onChange={this.props.handleShoppingCartNotesChange(
                  selectedPantryItems[i].name
                )}
                value={
                  this.props.getNameItem(
                    this.props.values.shoppingListTwo,
                    selectedPantryItems[i].name
                  )[0].notes
                } />
            </div>
            : <div className="hidden shadow-lg">
              <input className="w-full outline-none px-2" type="text" placeholder="Leave us a note." name={selectedPantryItems[i].name}
                onChange={this.props.handleShoppingCartNotesChange(
                  selectedPantryItems[i].name
                )}
                value={
                  this.props.getNameItem(
                    this.props.values.shoppingListTwo,
                    selectedPantryItems[i].name
                  )[0].notes
                } />
            </div>
          }
        </li>
      );
    }
    return result;
  };


  renderModal = () => {
    const { open } = this.state;
    return (
      <Modal className={{modal: onBoarding.shoppingListModal,}} open={open} onClose={this.onCloseModal} focusTrapped={false} center>
        <h3 className="text-center mx-auto w-2/3 text-xl md:text-3xl mt-8 font-bold text-gray-600">Your <span className="text-orange-base">second</span> shopping list.</h3>
        <ul className="p-2 min-h-full">
          {this.props.values.shoppingListTwo.length === 0 
              ? <div className="mb-8">
                  <img className="mt-8 block mx-auto" src="/images/on-boarding/category-items/empty-cart.png" alt=""></img>
                  <p className="mt-2 text-lg text-gray-400 text-center mx-auto font-bold">Add items from your pantry to your shopping list.</p>
                </div>
              : this.buildMobileShoppingList(this.props.values.shoppingListTwo)}
        </ul>
        <p className="container text-center border-t-2 border-gray-200 text-gray-500 mt-4 pt-4 font-bold">Est. Total: <span className="text-green-button">{this.props.getTotal("shoppingListTwo")}</span></p>
      </Modal>
    )
  }

  renderCategories = (category, label, img) => {
    const url = `/images/on-boarding/category-items/${img}.png`
    return (
      <li className="w-xl mx-1 mb-3 md:mb-4 mt-2">
        <label >
          <input
            className="hidden"
            type="radio"
            name="category"
            value={category}
            checked={this.state.selectedOption === category}
            onChange={this.handleOptionChange}
          />
          <span className="px-3 md:px-4 py-3 shadow-md rounded-full">
            <img className="inline mr-2" src={url} alt=""></img>
            <p className="font-bold inline italic">{label}</p>
          </span>
        </label>
      </li>
    )
  }


  render() {
    return (
      <div>
        <Navbar/>
        <h3 className="text-center w-2/3 mx-auto md:w-full text-2xl md:text-3xl mt-2 mb-4 md:mb-8 md:mt-0 font-bold text-gray-600">Create your <span className="text-orange-base">second</span> example shopping list.</h3>
        {this.renderModal()}
        <div className="md:container mx-auto flex justify-between md:w-3/4 mb-48">
          <div className="pantry-container w-full md:w-1/2 md:mr-8 mx-1 md:mx-0">
            <h3 className="hidden md:block shopping-cart-pantry-title">YOUR PANTRY</h3>
            <ul className="flex flex-wrap justify-center md:items-center pantry-categories">
              {this.renderCategories("Chicken", "Chicken", "Chicken")}
              {this.renderCategories("Beef", "Beef", "Beef")}
              {this.renderCategories("Pork", "Pork", "Pork")}
              {this.renderCategories("Lamb", "Lamb", "Lamb")}
              {this.renderCategories("Seafood", "Seafood", "Seafood")}
              {this.renderCategories("Vegetable", "Vegetables", "Vegetable")}
              {this.renderCategories("Fruit", "Fruits", "Fruit")}
              {this.renderCategories("Alternative Protein", "Alternative Proteins", "AlternativeProtein")}
              {this.renderCategories("Grain", "Grains", "Grain")}
              {this.renderCategories("Dairy", "Dairy", "Dairy")}
            </ul>
            <ul className="flex flex-wrap justify-around md:justify-between pantry__checkboxContainer pl-4">
              {this.createCategoryItems(this.state.selectedOption)} 
            </ul>
          </div>
          <div className="hidden md:block w-1/2">
            <ul >
              {this.props.values.shoppingListTwo.length === 0 
              ? <div className="mb-8">
                  <img className="mt-8 block mx-auto" src="/images/on-boarding/category-items/empty-cart.png" alt=""></img>
                  <p className="mt-2 text-lg text-gray-400 text-center w-1/2 mx-auto font-bold">Add items from your pantry to your shopping list.</p>
                </div>
              : this.buildShoppingList(this.props.values.shoppingListTwo)}
            </ul>
              <p className="container text-right border-t-2 border-gray-200 text-gray-500 mt-4 pt-4 font-bold">Est. Total: <span className="text-green-button">{this.props.getTotal("shoppingListTwo")}</span></p>
          </div>
        </div>
        <Footer continue={this.continue} back={this.back} modal={true} open={this.onOpenModal} length={this.props.values.shoppingListTwo.length}/>
      </div>
    );
  }
}

export default StepThree;
