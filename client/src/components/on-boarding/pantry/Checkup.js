import React, { Component } from "react";
import {Link} from "react-router-dom";
import Checkbox from "../utilities/Checkbox";

class Checkup extends Component {
    continue = e => {
    e.preventDefault();
    this.props.nextStep();
    };

    back = e => {
    e.preventDefault();
    this.props.prevStep();
    };

    render() {
    return (
        <div>
        <div className="on-boarding-nav">
            <button onClick={this.back}>Back</button>
            <Link to="/">
            <img src="images/pantriful-logo-orange.png" alt="" />
            </Link>
        </div>

        <div className="on-boarding-container container">
            <h2>Checkup</h2>
            <p>Checkup</p>
        </div>

        <div className="on-boarding-footer">
            <button onClick={this.continue}>Next</button>
        </div>
        </div>
    );
    }
}

export default Checkup;
