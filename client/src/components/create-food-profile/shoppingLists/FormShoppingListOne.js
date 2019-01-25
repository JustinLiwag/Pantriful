import React, { Component } from "react";

class FormShoppingListOne extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  getKey = (data, value) => {
    let result = [];
    for (var key in data) {
      if (data[key] === value) {
        result.push(key);
      }
    }
    return result;
  };

  render() {
    let data = this.props.values;

    console.log(this.getKey(data, true));
    return (
      <div>
        <h1>Form Shopping List One</h1>

        <button onClick={this.back}>Back</button>
        <button onClick={this.continue}>Continue</button>
      </div>
    );
  }
}

export default FormShoppingListOne;
