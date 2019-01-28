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

  formatContent = data => {
    let result = [];
    for (var i = 0; i < data.length; i++) {
      result.push(<p key={i}>{data[i]}</p>);
      console.log(result[i].props.children);
    }
    return result;
  };

  render() {
    let data = this.props.values;
    const selectedData = this.getKey(data, true);
    console.log(data.age);
    return (
      <div>
        <h1>Form Shopping List One</h1>

        {this.formatContent(selectedData)}
        <button onClick={this.back}>Back</button>
        <button onClick={this.continue}>Continue</button>
      </div>
    );
  }
}

export default FormShoppingListOne;
