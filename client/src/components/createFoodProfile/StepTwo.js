import React, { Component } from "react";
import Checkbox from "./Checkbox";

class StepTwo extends Component {
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

  // Handle Item Container Open/Close
  clickOpen = i => {
    if (this.state.shownIndex !== i) {
      this.setState({ shownIndex: i });
    }
    if (this.state.shownIndex === i) {
      this.setState({ shownIndex: -1 });
    }
  };

  // Get selected checkboxes
  getByValue = (map, searchValue) => {
    const selected = [];
    for (let [key, value] of map.entries()) {
      if (value === searchValue) {
        selected.push(key);
      }
    }
    return selected;
  };

  getCategoryItems = (array, value) => {
    const result = array.filter(item => item.category.indexOf(value) !== -1);
    return result;
  };

  createCheckboxItems = array => {
    let result = [];
    for (var i = 0; i < array.length; i++) {
      result.push({
        name: array[i].item_id,
        label: array[i].name
      });
    }
    console.log(result);
    return result;
  };

  render() {
    const chickenItemsSorted = this.getCategoryItems(
      this.props.foodProfile,
      "Chicken"
    );

    const beefItemsSorted = this.getCategoryItems(
      this.props.foodProfile,
      "Beef"
    );

    const porkItemsSorted = this.getCategoryItems(
      this.props.foodProfile,
      "Pork"
    );

    const lambItemsSorted = this.getCategoryItems(
      this.props.foodProfile,
      "Lamb"
    );

    const turkeyItemsSorted = this.getCategoryItems(
      this.props.foodProfile,
      "Turkey"
    );

    const seafoodItemsSorted = this.getCategoryItems(
      this.props.foodProfile,
      "Seafood"
    );

    let result = chickenItemsSorted.map(a => a.name);
    const { values, handleChange } = this.props;
    return (
      <div className="">
        <h1>Step Two: Building your Food Profile</h1>
        <p>
          Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin,
          erat a elementum rutrum, neque sem pretium metus, quis mollis nisl
          nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id
          vitae erat.
        </p>

        <div className="toggle-container">
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(1)} className="toggle-header">
              Chicken
            </div>
            <div
              className={
                this.state.shownIndex === 1
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              {this.createCheckboxItems(chickenItemsSorted).map(item => (
                <label key={item.name}>
                  <Checkbox
                    type={"checkbox"}
                    name={item.name}
                    checked={values.checkedItems.get(item.name)}
                    onChange={handleChange}
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(2)} className="toggle-header">
              Beef
            </div>
            <div
              className={
                this.state.shownIndex === 2
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              {this.createCheckboxItems(beefItemsSorted).map(item => (
                <label key={item.name}>
                  <Checkbox
                    type={"checkbox"}
                    name={item.name}
                    checked={values.checkedItems.get(item.name)}
                    onChange={handleChange}
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(3)} className="toggle-header">
              Pork
            </div>
            <div
              className={
                this.state.shownIndex === 3
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              {this.createCheckboxItems(porkItemsSorted).map(item => (
                <label key={item.name}>
                  <Checkbox
                    type={"checkbox"}
                    name={item.name}
                    checked={values.checkedItems.get(item.name)}
                    onChange={handleChange}
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(4)} className="toggle-header">
              Lamb/Turkey
            </div>
            <div
              className={
                this.state.shownIndex === 4
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              {this.createCheckboxItems(lambItemsSorted).map(item => (
                <label key={item.name}>
                  <Checkbox
                    type={"checkbox"}
                    name={item.name}
                    checked={values.checkedItems.get(item.name)}
                    onChange={handleChange}
                  />
                  {item.label}
                </label>
              ))}
              {this.createCheckboxItems(turkeyItemsSorted).map(item => (
                <label key={item.name}>
                  <Checkbox
                    type={"checkbox"}
                    name={item.name}
                    checked={values.checkedItems.get(item.name)}
                    onChange={handleChange}
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(5)} className="toggle-header">
              Seafood
            </div>
            <div
              className={
                this.state.shownIndex === 5
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              {this.createCheckboxItems(seafoodItemsSorted).map(item => (
                <label key={item.name}>
                  <Checkbox
                    type={"checkbox"}
                    name={item.name}
                    checked={values.checkedItems.get(item.name)}
                    onChange={handleChange}
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>
        </div>
        <button onClick={this.back}>Back</button>
        <button onClick={this.continue}>Continue</button>
      </div>
    );
  }
}

export default StepTwo;
