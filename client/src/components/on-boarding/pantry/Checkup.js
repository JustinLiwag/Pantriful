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

        <div className="on-boarding-container container stepOne">
            <img src="./images/on-boarding-checkup.png"/>
            <h2>You're doing great! Almost there.</h2>
            <p>For this last part we will just have you build the last part of your pantry. This includes things like vegetables and fruits!</p>
            <button className="main-button" onClick={this.continue}>Keep Going!</button>
        </div>
        </div>
    );
    }
}

export default Checkup;
