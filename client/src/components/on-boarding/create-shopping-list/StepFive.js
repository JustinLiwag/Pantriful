import React, { Component } from "react";
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"
// import onBoarding from "../../../css/On-boarding.css"

class StepFive extends Component {

  //  Need to figure out why this isnt hoisted within the class
  // Filter through pantry and find the categories present
  pantryCategoryFilter = (pantry) => {
    const filteredCategories = []
    pantry.forEach((e) => {
      filteredCategories.push(e.category)
    })
    var uniqueCategories = Array.from(new Set(filteredCategories))
    return uniqueCategories
  }
  
  state = {
    selectedOption: this.pantryCategoryFilter(this.props.pantryItems)[0],
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
    const shoppingListOneState = this.props.values.shoppingListOne

    // Creates Check boxes
    for (let i = 0; i < items.length; i++) {
      result.push(
        <div className="w-1/2 mt-6 sm:w-1/3 md:w-1/2 lg:w-1/3 select-none" key={items[i].item_id}>
          <input
            className="hidden"
            id={items[i].item_id}
            type="checkbox"
            name={items[i].name}
            checked={this.shoppingListChecked(
              shoppingListOneState,
              items[i].name
            )}
            onChange={this.props.handleCheckboxChangeShoppingListOne}
          />
          <label className="text-xs sm:text-sm text-gray-700" htmlFor={items[i].item_id}>{items[i].name}</label>
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
      result.unshift(
        <div className="mx-4 border-b border-gray-200 pb-3 mt-3 sm:max-w-lg sm:mx-auto md:px-2">

          <div className="px-4 block lg:hidden">

            <div className="flex items-center">
              {/* Item Name */}
              <p className="w-9/12 sm:w-10/12 md:w-9/12 text-sm sm:text-lg font-bold text-orange-base md:text-base">{selectedPantryItems[i].name}</p>
              {/* Quantity */}
              <p className="flex w-3/12 sm:w-2/12 md:w-3/12">
                <button className="focus:outline-none w-3/12 sm:w-3/12 bg-green-300 text-green-600 rounded leading-none" onClick={this.props.handleAmountDecrease} name={selectedPantryItems[i].name}>-</button>
                <input className="w-6/12 sm:w-6/12 text-center outline-none text-sm sm:text-base font-bold"
                  key={i}
                  type="number"
                  name={selectedPantryItems[i].name}
                  onChange={this.props.handleShoppingCartAmountChange(selectedPantryItems[i].name)}
                  value={this.props.getNameItem(this.props.values.shoppingListOne, selectedPantryItems[i].name)[0].amount}
                />
                <button className="focus:outline-none w-3/12 sm:w-3/12 md:w-3/12 bg-green-300 text-green-600 rounded leading-none" name={selectedPantryItems[i].name} onClick={this.props.handleAmountIncrease}>+</button>
              </p>
            </div>

            <div className="flex justify-between items-center mt-1 sm:mt-2 md:mt-1">
              {/* Measurement Unit */}
              <p className="text-xs sm:text-sm text-gray-500 font-bold">{selectedPantryItems[i].measurementUnit}</p>
              {/* Price */}
              <p className="text-xs sm:text-sm text-gray-700 font-bold tracking-wider">${" "}
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
          </div>
            
          {/* Large screen layout  */}
          <div className="lg:flex px-4 hidden lg:block">

            <div className="items-center lg:w-6/12">
              {/* Item Name */}
              <p className="text-sm sm:text-lg font-bold text-orange-base md:text-base">{selectedPantryItems[i].name}</p>
              {/* Measurement Unit */}
              <p className="text-xs sm:text-sm text-gray-500 font-bold">
                {selectedPantryItems[i].measurementUnit === "" ? "Count" : selectedPantryItems[i].measurementUnit}
              </p>
            </div>

            {/* Quantity */}
            <div className="flex w-3/12 lg:w-2/12 lg:leading-none lg:self-center">
              <button className="focus:outline-none w-3/12 sm:w-3/12 bg-green-300 text-green-600 rounded leading-none" onClick={this.props.handleAmountDecrease} name={selectedPantryItems[i].name}>-</button>
              <input className="w-6/12 sm:w-6/12 text-center outline-none text-sm sm:text-base lg:text-lg font-bold"
                key={i}
                type="number"
                name={selectedPantryItems[i].name}
                onChange={this.props.handleShoppingCartAmountChange(selectedPantryItems[i].name)}
                value={this.props.getNameItem(this.props.values.shoppingListOne, selectedPantryItems[i].name)[0].amount}
              />
              <button className="focus:outline-none w-3/12 sm:w-3/12 md:w-3/12 bg-green-300 text-green-600 rounded leading-none" name={selectedPantryItems[i].name} onClick={this.props.handleAmountIncrease}>+</button>
            </div>

            <div className="flex justify-center items-center mt-1 sm:mt-2 md:mt-1 lg:w-4/12">
              {/* Price */}
              <p className="text-xs sm:text-base text-gray-700 font-bold tracking-wider">${" "}
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

          </div>

        </div>
      );
    }
    return result;
  };

  buildMobileShoppingList = selectedPantryItems => {
    const result = [];

    for (let i = 0; i < selectedPantryItems.length; i++) {
      result.unshift(
        <div className={"mx-4 border-b border-gray-200 pb-3 mt-3 sm:max-w-lg sm:mx-auto "}>
          <div className="px-4">

            <div className="flex items-center">
              {/* Item Name */}
              <p className="w-9/12 sm:w-10/12 text-sm sm:text-lg font-bold text-orange-base">{selectedPantryItems[i].name}</p>
              {/* Quantity */}
              <p className="flex w-3/12 sm:w-2/12">
                <button className="focus:outline-none w-3/12 sm:w-3/12 bg-green-300 text-green-600 rounded leading-none" onClick={this.props.handleAmountDecrease} name={selectedPantryItems[i].name}>-</button>
                <input className="w-6/12 sm:w-6/12 text-center outline-none text-sm sm:text-base font-bold"
                  key={i}
                  type="number"
                  name={selectedPantryItems[i].name}
                  onChange={this.props.handleShoppingCartAmountChange(selectedPantryItems[i].name)}
                  value={this.props.getNameItem(this.props.values.shoppingListOne, selectedPantryItems[i].name)[0].amount}
                />
                <button className="focus:outline-none w-3/12 sm:w-3/12 bg-green-300 text-green-600 rounded leading-none" name={selectedPantryItems[i].name} onClick={this.props.handleAmountIncrease}>+</button>
              </p>
            </div>

            <div className="flex justify-between items-center mt-1 sm:mt-2">
              {/* Measurement Unit */}
              <p className="text-xs sm:text-sm text-gray-500 font-bold">{selectedPantryItems[i].measurementUnit}</p>
              {/* Price */}
              <p className="text-xs sm:text-sm text-gray-700 font-bold tracking-wider">${" "}
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
          </div>
        </div>
      );
    }
    return result;
  };


  renderModal = () => {
    return (
      <div className={"z-10 bg-white h-full w-full absolute top-0 overflow-auto " + (this.state.modalOpen ? 'block' : 'hidden')}>
        <div className="flex justify-end mt-6 mr-8">
          <svg onClick={this.toggleModal} width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.4646 12.9823c.3316.3315.5178.7811.5178 1.25 0 .4688-.1862.9184-.5178 1.2499-.3315.3316-.7811.5178-1.2499.5178-.4689 0-.9185-.1862-1.25-.5178L8 10.5l-4.98229 4.9822c-.33152.3316-.78115.5178-1.24998.5178-.46883 0-.918459-.1862-1.249973-.5178C.186243 15.1507 0 14.7011 0 14.2323c0-.2322.0457243-.462.134561-.6765.088837-.2145.219047-.4094.383196-.5735L5.50005 8.01761.535362 3.01771C.203848 2.68619.0176057 2.23656.0176057 1.76773c0-.46883.1862423-.918459.5177563-1.249973S1.31651 0 1.78534 0c.46883 0 .91846.186243 1.24997.517757l4.9823 4.982293L12.9823.517757c.1641-.164149.359-.29436.5735-.383197C13.7703.0457234 14.0001 0 14.2323 0c.2321 0 .462.0457234.6765.13456.2144.088837.4093.219048.5734.383197.1642.164149.2944.359021.3832.573493.0889.21447.1346.44434.1346.67648 0 .23214-.0457.46201-.1346.67648-.0888.21447-.219.40935-.3832.5735L10.5 8l4.9822 4.9647-.0176.0176z" fill="#2D3748" />
          </svg>
        </div>
        <p className="my-4 text-center text-lg font-bold">First Shopping List</p>
        <div>
          {this.buildMobileShoppingList(this.props.values.shoppingListOne)}
          <div className="flex justify-between sm:max-w-lg px-8 sm:px-4 mt-6 mx-auto">
            <p className="text-base font-bold text-red-300 cursor-pointer md:hover:text-red-500" onClick={this.props.clearShoppingList}>clear all</p>
            <p className="text-sm sm:text-lg text-gray-600 font-bold mb-48">Est. Total: <span className="text-green-button">{this.props.getTotal("shoppingListOne")}</span></p>
          </div>
        </div>
      </div>
    )
  }

  // Create category selection pills
  createCategories = (category, label, img) => {
    const url = `/images/on-boarding/category-items/${img}.png`
    return (
      <div key={category} className="mb-1">
        <label >
          <input
            className="hidden"
            type="radio"
            name="category"
            value={category}
            checked={this.state.selectedOption === category}
            onChange={this.handleOptionChange}
          />
          <span className="px-3 py-2 sm:px-4 sm:py-2 md:px-3 shadow-md rounded-full bg-white leading-none flex items-center">
            <img className="mr-2 w-4 h-4 sm:w-6 sm:h-6" src={url} alt=""></img>
            <p className="font-bold text-sm sm:text-lg md:text-sm">{label}</p>
          </span>
        </label>
      </div>
    )
  }

  // Create categories for shopping list (it will exclude categories with zero items)
  renderCategories = (categories) => {
    const renderedItems = []

    
    for (let i = 0; i < categories.length; i++) {
      if (categories[i] === "Vegetable") { 
        renderedItems.push(this.createCategories(categories[i], "Vegetables", categories[i])) 
        continue; 
      }  
      if (categories[i] === "Fruit") { 
        renderedItems.push(this.createCategories(categories[i], "Fruits", categories[i])) 
        continue; 
      }  
      if (categories[i] === "Alternative Protein") { 
        renderedItems.push(this.createCategories("Alternative Protein", "Alternative Proteins", "AlternativeProtein")) 
        continue; 
      }  
      if (categories[i] === "Grain") { 
        renderedItems.push(this.createCategories(categories[i], "Grains", categories[i])) 
        continue; 
      }  
      renderedItems.push(this.createCategories(categories[i], categories[i], categories[i]))
    } 

    return renderedItems
  }


  render() {
    return (
      <div>
        <Navbar/>
        <h3 className="mx-12 mt-8 text-lg font-bold text-gray-700 text-center md:text-2xl">Create your <span className="text-orange-base">first</span> example shopping list.</h3>
        {this.state.error ? <div className="text-center text-md md:text-xl mb-8 text-red-400">{this.state.error}</div> : null}
        {this.renderModal()}
        <div className="mx-auto flex justify-between mb-48 md:border-t md:border-gray-200 md:max-w-3xl md:mt-4 lg:max-w-5xl lg:mx-8 lg:mx-auto">
          <div className="w-full md:w-1/2 mx-1 md:border-r md:border-gray-200 md:border-b md:pb-8">
            <div className="mt-4 flex flex-wrap justify-center pantry-categories sm:max-w-lg sm:mx-auto md:mx-5">
              {this.renderCategories(this.pantryCategoryFilter(this.props.pantryItems))}
            </div>
            <div className="mx-6 mt-4 flex flex-wrap justify-start pantry__checkboxContainer border-t border-gray-200 sm:max-w-lg sm:mx-auto md:px-8">
              {this.createCategoryItems(this.state.selectedOption)} 
            </div>
          </div>
          <div className="hidden md:block w-1/2">
            <div>
              {this.props.values.shoppingListOne.length === 0 
              ? <div className="md:border-b md:border-gray-200 md:py-8">
                  <svg className="block mx-auto"width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.2826 11.56h-6.984v7.416H7.68059V11.56H.732594V8.266H7.68059V.885998h3.61801V8.266h6.984v3.294z" fill="#CBD5E0" />
                  </svg>
                  <p className="mt-2 text-lg text-gray-400 w-2/3 text-center mx-auto font-bold">Add items from your pantry to your shopping list.</p>
                </div>
              : this.buildShoppingList(this.props.values.shoppingListOne)}
            </div>
              <div className="flex justify-between items-center px-8 mt-6">
                <p className="text-base font-bold text-red-300 cursor-pointer hover:text-red-500" onClick={this.props.clearShoppingList}>clear all</p>
                <p className="border-t-2 border-gray-200 md:border-none text-gray-500 font-bold">Est. Total: <span className="text-green-button">{this.props.getTotal("shoppingListOne")}</span></p>
              </div>
          </div>
        </div>
        <Footer continue={this.continue} back={this.back} modal={true} open={this.toggleModal} length={this.props.values.shoppingListOne.length}/>
      </div>
    );
  }
}

export default StepFive;
