import React, { Component } from "react";
import Checkbox from "./Checkbox";

class StepThree extends Component {
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

  render() {
    const {
      values,
      handleCheckboxChange,
      foodProfile,
      createCheckboxItems,
      getCategoryItems
    } = this.props;

    return (
      <div className="">
        <h1>Step Three: Building your Food Profile</h1>
        <p>
          Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin,
          erat a elementum rutrum, neque sem pretium metus, quis mollis nisl
          nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id
          vitae erat.
        </p>

        <div className="toggle-container">
          {/*
            Grains Food Profile Section
          */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(1)} className="toggle-header">
              Grains
            </div>
            <div
              key="gtains-container"
              className={
                this.state.shownIndex === 1
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              {createCheckboxItems(getCategoryItems(foodProfile, "Grains")).map(
                item => (
                  <label key={item.name}>
                    <Checkbox
                      key={item.item_id}
                      type={"checkbox"}
                      name={item.name}
                      checked={values.checkedItems.get(item.name)}
                      onChange={handleCheckboxChange}
                    />
                    {item.label}
                  </label>
                )
              )}
            </div>
          </div>

          {/*
            Dairy Food Profile Section
          */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(2)} className="toggle-header">
              Dairy
            </div>
            <div
              key="dairy-container"
              className={
                this.state.shownIndex === 2
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              {createCheckboxItems(getCategoryItems(foodProfile, "Dairy")).map(
                item => (
                  <label key={item.name}>
                    <Checkbox
                      key={item.item_id}
                      type={"checkbox"}
                      name={item.name}
                      checked={values.checkedItems.get(item.name)}
                      onChange={handleCheckboxChange}
                    />
                    {item.label}
                  </label>
                )
              )}
            </div>
          </div>

          {/*
            Alternative Protein Food Profile Section
          */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(3)} className="toggle-header">
              Alternative Protein
            </div>
            <div
              key="alternative-protein-container"
              className={
                this.state.shownIndex === 3
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              {createCheckboxItems(
                getCategoryItems(foodProfile, "Alternative Protein")
              ).map(item => (
                <label key={item.name}>
                  <Checkbox
                    key={item.item_id}
                    type={"checkbox"}
                    name={item.name}
                    checked={values.checkedItems.get(item.name)}
                    onChange={handleCheckboxChange}
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>

          {/*
            Vegetables Food Profile Section
          */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(4)} className="toggle-header">
              Vegetables
            </div>
            <div
              key="vegetables-container"
              className={
                this.state.shownIndex === 4
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              {createCheckboxItems(
                getCategoryItems(foodProfile, "Vegetables")
              ).map(item => (
                <label key={item.name}>
                  <Checkbox
                    key={item.item_id}
                    type={"checkbox"}
                    name={item.name}
                    checked={values.checkedItems.get(item.name)}
                    onChange={handleCheckboxChange}
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>

          {/*
            Fruit Food Profile Section
          */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(5)} className="toggle-header">
              Fruit
            </div>
            <div
              key="Fruit-container"
              className={
                this.state.shownIndex === 5
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              {createCheckboxItems(getCategoryItems(foodProfile, "Fruit")).map(
                item => (
                  <label key={item.name}>
                    <Checkbox
                      key={item.item_id}
                      type={"checkbox"}
                      name={item.name}
                      checked={values.checkedItems.get(item.name)}
                      onChange={handleCheckboxChange}
                    />
                    {item.label}
                  </label>
                )
              )}
            </div>
          </div>

          {/*
            End of Food Profile Section
          */}
        </div>
        <button onClick={this.back}>Back</button>
        <button onClick={this.continue}>Continue</button>
      </div>
    );
  }
}

export default StepThree;
