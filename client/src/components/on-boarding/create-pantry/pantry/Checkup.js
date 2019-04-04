import React, { Component } from "react";
import {Link} from "react-router-dom";

class Checkup extends Component {
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

    render() {
    return (
        <div>
        <div className="on-boarding-nav">
            <button onClick={this.back}>Back</button>
            <Link to="/">
            <img src="images/logo/on-boarding-logo.png" alt="" />
            </Link>
        </div>

        <div className="on-boarding-container container stepOne">
            <img src="./images/on-boarding/on-boarding-checkup.png" alt=""/>
            <h2>You're doing great! Almost there.</h2>
            <p>For this last part we will just have you build the last part of your pantry. This includes things like vegetables and fruits!</p>
                <div className="on-boarding-footer">
                    <button onClick={this.continue}>Keep Going!</button>
                </div>
        </div>
        </div>
    );
    }
}

export default Checkup;
