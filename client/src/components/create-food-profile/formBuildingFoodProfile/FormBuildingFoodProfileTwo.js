import React, { Component, PureComponent } from "react";
import CheckboxFieldGroup from "../../common/checkboxFieldGroup.js";

import Grains from "./foodCategories/Grains";
import Dairy from "./foodCategories/Dairy";
import AlternativeProteins from "./foodCategories/AlternativeProteins";
import Vegetables from "./foodCategories/Vegetables";
import Fruit from "./foodCategories/Fruit";

class FormBuildingFoodProfileTwo extends PureComponent {
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
              Grains
            </div>
            <div
              className={
                this.state.shownIndex === 1
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              <Grains value={value} handleChange={handleChange} />
            </div>
          </div>
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(2)} className="toggle-header">
              Dairy
            </div>
            <div
              className={
                this.state.shownIndex === 2
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              <Dairy value={value} handleChange={handleChange} />
            </div>
          </div>
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(3)} className="toggle-header">
              Alternative Protein
            </div>
            <div
              className={
                this.state.shownIndex === 3
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              <AlternativeProteins value={value} handleChange={handleChange} />
            </div>
          </div>
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(4)} className="toggle-header">
              Vegetables
            </div>
            <div
              className={
                this.state.shownIndex === 4
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              <Vegetables value={value} handleChange={handleChange} />
            </div>
          </div>
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(5)} className="toggle-header">
              Fruit
            </div>
            <div
              className={
                this.state.shownIndex === 5
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              <Fruit value={value} handleChange={handleChange} />
            </div>
          </div>
          <button onClick={this.back}>Back</button>
          <button onClick={this.continue}>Continue</button>
        </div>
      </div>
    );
  }
}

export default FormBuildingFoodProfileTwo;
