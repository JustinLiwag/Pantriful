import React, { Component } from "react";

class FormShoppingListTwo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <div>
        <h1>Form Shopping List Two</h1>
        <button onClick={this.back}>Back</button>
        <button onClick={this.continue}>Continue</button>
      </div>
    );
  }
}

export default FormShoppingListTwo;
