import React, { Component } from "react";
import Navbar from "../../layout/Navbar"

class ShoppingListContainer extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <h1>Shopping List Container</h1>
      </div>
    );
  }
}

export default ShoppingListContainer;