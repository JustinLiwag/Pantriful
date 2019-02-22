import React, { Component } from "react";
import Checkbox from "./Checkbox";

class StepThree extends Component {
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
      <div className="on-boarding-container container">
        <img
          className="on-boarding-steps"
          src="images/on-boarding-3.jpg"
          alt=""
        />
        <a onClick={this.back} className="back-button" href="">
          &lt; Back
        </a>
        <h1 className="on-boarding-title">Finish building your Pantry</h1>
        <p className="on-boarding-description">
          Here is the rest of the items for you to fill out. Once complete, your
          pantry will let us really tailor Pantriful to you and provide a truly
          customized service.
        </p>

        <div className="toggle-container">
          {/* Fruits */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(1)} className="toggle-header">
              Fruits
            </div>
            <div
              key="grains-container"
              className={
                this.state.shownIndex === 1
                  ? "toggle-content showing checkbox-container"
                  : "toggle-content checkbox-container"
              }
            >
              {createCheckboxItems(getCategoryItems(foodProfile, "Fruit")).map(
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

          {/* Vegetables */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(2)} className="toggle-header">
              Vegetables
            </div>
            <div
              key="dairy-container"
              className={
                this.state.shownIndex === 2
                  ? "toggle-content showing checkbox-container"
                  : "toggle-content checkbox-container"
              }
            >
              {createCheckboxItems(getCategoryItems(foodProfile, "Vegetables")).map(
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

          {/* Alternative Protein */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(3)} className="toggle-header">
              Alternative Protein
            </div>
            <div
              key="alternative-protein-container"
              className={
                this.state.shownIndex === 3
                  ? "toggle-content showing checkbox-container"
                  : "toggle-content checkbox-container"
              }
            >
              {createCheckboxItems(
                getCategoryItems(foodProfile, "Alternative Protein")
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

          {/* Grains */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(4)} className="toggle-header">
              Grains
            </div>
            <div
              key="vegetabls-container"
              className={
                this.state.shownIndex === 4
                  ? "toggle-content showing checkbox-container"
                  : "toggle-content checkbox-container"
              }
            >
              {createCheckboxItems(
                getCategoryItems(foodProfile, "Grains")
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

          {/* Dairy */}
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(5)} className="toggle-header">
              Dairy
            </div>
            <div
              key="fruit-container"
              className={
                this.state.shownIndex === 5
                  ? "toggle-content showing checkbox-container"
                  : "toggle-content checkbox-container"
              }
            >
              {createCheckboxItems(getCategoryItems(foodProfile, "Dairy")).map(
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

export default StepThree;
