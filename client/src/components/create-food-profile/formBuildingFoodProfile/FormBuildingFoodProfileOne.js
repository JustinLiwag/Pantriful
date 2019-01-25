import React, { Component, PureComponent } from "react";
import CheckboxFieldGroup from "../../common/checkboxFieldGroup.js";

import Chicken from "./foodCategories/Chicken";
import Beef from "./foodCategories/Beef";
import Pork from "./foodCategories/Pork";
import LambTurkey from "./foodCategories/LambTurkey";
import Seafood from "./foodCategories/Seafood";

class FormBuildingFoodProfileOne extends PureComponent {
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

  clickOpen = i => {
    if (this.state.shownIndex !== i) {
      this.setState({ shownIndex: i });
    }
    if (this.state.shownIndex === i) {
      this.setState({ shownIndex: -1 });
    }
  };

  render() {
    const { value, handleChange } = this.props;
    return (
      <div className="container">
        <h1>Building your Food Profile</h1>
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
              <Chicken value={value} handleChange={handleChange} />
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
              <Beef value={value} handleChange={handleChange} />
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
              <Pork value={value} handleChange={handleChange} />
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
              <LambTurkey value={value} handleChange={handleChange} />
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
              <Seafood value={value} handleChange={handleChange} />
            </div>
          </div>
          <button onClick={this.back}>Back</button>
          <button onClick={this.continue}>Continue</button>
        </div>
      </div>
    );
  }
}

export default FormBuildingFoodProfileOne;
