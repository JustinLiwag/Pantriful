import React, { Component } from "react";
import {Link} from 'react-router-dom'

class ShoppingListContainer extends Component {
  render() {
    return (
      <div>
        <div className="on-boarding-nav">
            <Link to="/"><button>Back</button></Link>
            <Link to="/">
              <img src="images/pantriful-logo-orange.png" alt="" />
            </Link>
        </div>
        <div className="on-boarding-container container">
          <h1>Shopping List Container</h1>
        </div>
      </div>
    );
  }
}

export default ShoppingListContainer;