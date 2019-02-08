import React, { Component } from "react";
import Checkbox from "./Checkbox";

class StepTwo extends Component {
  state = {
    shownIndex: 1
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
      <div className="on-boarding-container">
        <img
          className="on-boarding-steps"
          src="images/on-boarding-2.jpg"
          alt=""
        />
        <a onClick={this.back} className="back-button" href="">
          &lt; Back
        </a>
        <h1 className="on-boarding-title">Building your Pantry</h1>
        <p className="on-boarding-description">
          Your pantry is a collection of all the things you like to eat. By
          checking the items you eat on a regular basis we can understand what
          your overall preferences are. Don’t worry if some of the things you
          like are not shown. We will be updating this list constantly and you
          will be able to change this whenever you want!
        </p>

        <div className="toggle-container">
          {/* CHICKEN */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(1)} className="toggle-header">
              Chicken
            </div>
            <div
              key="chicken-container"
              className={
                this.state.shownIndex === 1
                  ? "toggle-content showing checkbox-container"
                  : "toggle-content checkbox-container"
              }
            >
              {createCheckboxItems(
                getCategoryItems(foodProfile, "Chicken")
              ).map(item => (
                <div>
                  <Checkbox
                    id={item.name}
                    key={item.item_id}
                    type={"checkbox"}
                    name={item.name}
                    checked={values.checkedItems.get(item.name)}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={item.name} key={item.name}>
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Beef */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(2)} className="toggle-header">
              Beef
            </div>
            <div
              key="chicken-container"
              className={
                this.state.shownIndex === 2
                  ? "toggle-content showing checkbox-container"
                  : "toggle-content checkbox-container"
              }
            >
              {createCheckboxItems(getCategoryItems(foodProfile, "Beef")).map(
                item => (
                  <div>
                    <Checkbox
                      id={item.name}
                      key={item.item_id}
                      type={"checkbox"}
                      name={item.name}
                      checked={values.checkedItems.get(item.name)}
                      onChange={handleCheckboxChange}
                    />
                    <label for={item.name} key={item.name}>
                      {item.label}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Pork */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(3)} className="toggle-header">
              Pork
            </div>
            <div
              key="chicken-container"
              className={
                this.state.shownIndex === 3
                  ? "toggle-content showing checkbox-container"
                  : "toggle-content checkbox-container"
              }
            >
              {createCheckboxItems(getCategoryItems(foodProfile, "Pork")).map(
                item => (
                  <div>
                    <Checkbox
                      id={item.name}
                      key={item.item_id}
                      type={"checkbox"}
                      name={item.name}
                      checked={values.checkedItems.get(item.name)}
                      onChange={handleCheckboxChange}
                    />
                    <label for={item.name} key={item.name}>
                      {item.label}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Lamb and Turkey */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(4)} className="toggle-header">
              Lamb and Turkey
            </div>
            <div
              key="chicken-container"
              className={
                this.state.shownIndex === 4
                  ? "toggle-content showing checkbox-container"
                  : "toggle-content checkbox-container"
              }
            >
              {createCheckboxItems(getCategoryItems(foodProfile, "Lamb")).map(
                item => (
                  <div>
                    <Checkbox
                      id={item.name}
                      key={item.item_id}
                      type={"checkbox"}
                      name={item.name}
                      checked={values.checkedItems.get(item.name)}
                      onChange={handleCheckboxChange}
                    />
                    <label for={item.name} key={item.name}>
                      {item.label}
                    </label>
                  </div>
                )
              )}

              {createCheckboxItems(getCategoryItems(foodProfile, "Turkey")).map(
                item => (
                  <div>
                    <Checkbox
                      id={item.name}
                      key={item.item_id}
                      type={"checkbox"}
                      name={item.name}
                      checked={values.checkedItems.get(item.name)}
                      onChange={handleCheckboxChange}
                    />
                    <label for={item.name} key={item.name}>
                      {item.label}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Seafood */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(5)} className="toggle-header">
              Seafood
            </div>
            <div
              key="chicken-container"
              className={
                this.state.shownIndex === 5
                  ? "toggle-content showing checkbox-container"
                  : "toggle-content checkbox-container"
              }
            >
              {createCheckboxItems(
                getCategoryItems(foodProfile, "Seafood")
              ).map(item => (
                <div>
                  <Checkbox
                    id={item.name}
                    key={item.item_id}
                    type={"checkbox"}
                    name={item.name}
                    checked={values.checkedItems.get(item.name)}
                    onChange={handleCheckboxChange}
                  />
                  <label for={item.name} key={item.name}>
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
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

export default StepTwo;
