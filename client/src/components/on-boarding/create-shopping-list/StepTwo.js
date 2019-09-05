import React, { Component } from "react";
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"
import Modal from 'react-responsive-modal';
import onBoarding from "../../../css/On-boarding.css"

class StepTwo extends Component {
  state = {
    selectedOption: "Chicken",
    openNote: "",
    modalOpen: false,
    error: ""
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };


  continue = e => {
    e.preventDefault();
    if(this.props.values.shoppingListOne.length === 0 ) {
      return this.setState({error: "Please add items to your shopping lists"})
    }
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
        <li className="w-1/2 mt-6" key={items[i].name}>
          <input
            className="hidden"
            id={items[i].name}
            type="checkbox"
            name={items[i].name}
            defaultChecked={this.shoppingListChecked(
              this.props.values.shoppingListOne,
              items[i].name
            )}
            onChange={this.props.handleCheckboxChangeShoppingListOne}
          />
          <label className="text-xs text-gray-700" htmlFor={items[i].name}>{items[i].name}</label>
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
                value={this.props.getNameItem(this.props.values.shoppingListOne, selectedPantryItems[i].name)[0].amount} 
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
                  this.props.values.shoppingListOne,
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

  buildMobileShoppingList = selectedPantryItems => {
    const result = [];

    for (let i = 0; i < selectedPantryItems.length; i++) {
      result.push(
        <div className={"mx-4 border-b border-gray-200 pb-3 mt-3 " + (i === selectedPantryItems.length - 1 ? 'mb-48' : 'mb-0') }>
          <div className="px-4">

            <div className="flex items-center">
              {/* Item Name */}
              <p className="w-9/12 text-sm font-bold text-orange-base">{selectedPantryItems[i].name}</p>
              {/* Quantity */}
              <p className="flex w-3/12">
                <button className="w-3/12 bg-green-300 text-green-600 rounded leading-none" onClick={this.props.handleAmountDecrease} name={selectedPantryItems[i].name}>-</button>
                <input className="w-6/12 text-center outline-none text-sm font-bold"
                  key={i}
                  type="number"
                  name={selectedPantryItems[i].name}
                  onChange={this.props.handleShoppingCartAmountChange(selectedPantryItems[i].name)}
                  value={this.props.getNameItem(this.props.values.shoppingListOne, selectedPantryItems[i].name)[0].amount}
                />
                <button className="w-3/12 bg-green-300 text-green-600 rounded leading-none" name={selectedPantryItems[i].name} onClick={this.props.handleAmountIncrease}>+</button>
              </p>
            </div>

            <div className="flex justify-between items-center mt-1">
              {/* Measurement Unit */}
              <p className="text-xs text-gray-500 font-bold">{selectedPantryItems[i].measurementUnit}</p>
              {/* Price */}
              <p className="text-xs text-gray-700 font-bold tracking-wider">${" "}
                {(
                  selectedPantryItems[i].lowPrice *
                  selectedPantryItems[i].amount
                ).toFixed(2)}{" "}
                - ${" "}
                {(
                  selectedPantryItems[i].upperPrice *
                  selectedPantryItems[i].amount
                ).toFixed(2)}</p>
            </div>



{/* 
            <div className="flex"> */}
              {/* Quantity Button */}
              {/* <div className="flex w-4/12">
                <button className="w-2/12 focus:outline-none text-2xl font-bold text-orange-base" name={selectedPantryItems[i].name} onClick={this.props.handleAmountDecrease}>-</button>
                <input className="w-6/12 text-center outline-none text-2xl"
                  key={i}
                  type="number"
                  name={selectedPantryItems[i].name}
                  onChange={this.props.handleShoppingCartAmountChange(selectedPantryItems[i].name)}
                  value={this.props.getNameItem(this.props.values.shoppingListOne, selectedPantryItems[i].name)[0].amount}
                />
                <button className="w-2/12 focus:outline-none text-2xl font-bold text-orange-base" name={selectedPantryItems[i].name} onClick={this.props.handleAmountIncrease}>+</button>
              </div> */}
              {/* Measurement */}
              {/* <p className="text-xs text-gray-500 mt-1 font-bold self-center tracking-wider">{selectedPantryItems[i].measurementUnit} of</p>
            </div> */}
            {/* Item Name */}
            {/* <div><p className="text-orange-base font-bold text-md md:text-xl">{selectedPantryItems[i].name}</p></div>
            <div className="flex justify-between items-center"> */}
              {/* Price */}
              {/* <div>
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
              </div> */}
              {/* Notes */}
              {/* <div>
                {this.props.getNameItem(
                  this.props.values.shoppingListOne,
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
                    this.props.values.shoppingListOne,
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
                    this.props.values.shoppingListOne,
                    selectedPantryItems[i].name
                  )[0].notes
                } />
            </div>
          } */}
          </div>
        </div>
      );
    }
    return result;
  };


  renderModal = () => {
    const { modalOpen } = this.state;
    return (
      <div className={"z-10 bg-white h-full w-full absolute top-0 overflow-auto " + (this.state.modalOpen ? 'block' : 'hidden')}>
        <p className="my-8 text-center text-lg">Shopping List</p>
        <div>
          {this.buildMobileShoppingList(this.props.values.shoppingListOne)}
        </div>
      </div>



      // <Modal className={{modal: onBoarding.shoppingListModal,}} open={modalOpen} onClose={this.onCloseModal} focusTrapped={false} center>
      //   <h3 className="text-center mx-auto w-2/3 text-xl md:text-3xl mt-8 font-bold text-gray-600">Your <span className="text-orange-base">second</span> shopping list.</h3>
      //   <ul className="p-2 min-h-full">
      //     {this.props.values.shoppingListOne.length === 0 
      //         ? <div className="mb-8">
      //             <img className="mt-8 block mx-auto" src="/images/on-boarding/category-items/empty-cart.png" alt=""></img>
      //             <p className="mt-2 text-lg text-gray-400 text-center mx-auto font-bold">Add items from your pantry to your shopping list.</p>
      //           </div>
      //         : this.buildMobileShoppingList(this.props.values.shoppingListOne)}
      //   </ul>
      //   <p className="container text-center border-t-2 border-gray-200 text-gray-500 mt-4 pt-4 font-bold">Est. Total: <span className="text-green-button">{this.props.getTotal("shoppingListOne")}</span></p>
      // </Modal>
    )
  }

  // Create category selection pills
  renderCategories = (category, label, img) => {
    const url = `/images/on-boarding/category-items/${img}.png`
    return (
      <div className="mb-1">
        <label >
          <input
            className="hidden"
            type="radio"
            name="category"
            value={category}
            checked={this.state.selectedOption === category}
            onChange={this.handleOptionChange}
          />
          <span className="px-3 py-2 shadow-md rounded-full bg-white leading-none flex items-center">
            <img className="mr-2 w-4 h-4" src={url} alt=""></img>
            <p className="font-bold text-sm">{label}</p>
          </span>
        </label>
      </div>
    )
  }


  render() {
    return (
      <div>
        <Navbar/>
        <h3 className="mx-12 mt-8 text-lg font-bold text-gray-700 text-center">Create your <span className="text-orange-base">first</span> example shopping list.</h3>
        {this.state.error ? <div className="text-center text-md md:text-xl mb-8 text-red-400">{this.state.error}</div> : null}
        {this.renderModal()}
        <div className="md:container mx-auto flex justify-between md:w-3/4 mb-48">
          <div className="pantry-container w-full md:w-1/2 md:mr-8 mx-1 md:mx-0">
            <div className="mt-4 flex flex-wrap justify-center pantry-categories">
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
            </div>
            <ul className="mx-6 mt-4 flex flex-wrap justify-around pantry__checkboxContainer border-t border-gray-200">
              {this.createCategoryItems(this.state.selectedOption)} 
            </ul>
          </div>
          <div className="hidden md:block w-1/2">
            <ul >
              {this.props.values.shoppingListOne.length === 0 
              ? <div className="mb-8">
                  <img className="mt-8 block mx-auto" src="/images/on-boarding/category-items/empty-cart.png" alt=""></img>
                  <p className="mt-2 text-lg text-gray-400 text-center w-1/2 mx-auto font-bold">Add items from your pantry to your shopping list.</p>
                </div>
              : this.buildShoppingList(this.props.values.shoppingListOne)}
            </ul>
              <p className="container text-right border-t-2 border-gray-200 text-gray-500 mt-4 pt-4 font-bold">Est. Total: <span className="text-green-button">{this.props.getTotal("shoppingListOne")}</span></p>
          </div>
        </div>
        <Footer continue={this.continue} back={this.back} modal={true} open={this.toggleModal} length={this.props.values.shoppingListOne.length}/>
      </div>
    );
  }
}

export default StepTwo;
