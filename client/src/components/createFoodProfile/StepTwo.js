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
        <h1>Step Two: Building your Food Profile</h1>
        <p>
          Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin,
          erat a elementum rutrum, neque sem pretium metus, quis mollis nisl
          nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id
          vitae erat.
        </p>

        <div className="toggle-container">
          {/*
            Chicken Food Profile Section
          */}
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
                getCategoryItems(foodProfile, "Chicken")
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
            Beef Food Profile Section
          */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(2)} className="toggle-header">
              Beef
            </div>
            <div
              key="chicken-container"
              className={
                this.state.shownIndex === 2
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              {createCheckboxItems(getCategoryItems(foodProfile, "Beef")).map(
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
            Pork Food Profile Section
          */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(3)} className="toggle-header">
              Pork
            </div>
            <div
              key="chicken-container"
              className={
                this.state.shownIndex === 3
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              {createCheckboxItems(getCategoryItems(foodProfile, "Pork")).map(
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
            Lamb/Turkey Food Profile Section
          */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(4)} className="toggle-header">
              Lamb/Turkey
            </div>
            <div
              key="chicken-container"
              className={
                this.state.shownIndex === 4
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              {createCheckboxItems(getCategoryItems(foodProfile, "Lamb")).map(
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

              {createCheckboxItems(getCategoryItems(foodProfile, "Turkey")).map(
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
            Seafood Food Profile Section
          */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(5)} className="toggle-header">
              Seafood
            </div>
            <div
              key="chicken-container"
              className={
                this.state.shownIndex === 5
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              {createCheckboxItems(
                getCategoryItems(foodProfile, "Seafood")
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
            End of Food Profile Section
          */}
        </div>
        <button onClick={this.back}>Back</button>
        <button onClick={this.continue}>Continue</button>
      </div>
    );
  }
}

export default StepTwo;
