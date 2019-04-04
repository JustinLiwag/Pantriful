import React, { Component } from "react";
import {Link} from "react-router-dom";
import Checkbox from "../../utilities/Checkbox";

class Seafood extends Component {
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

    createCheckboxesFromApi = (items, category) => {
        const filteredList = this.props.getCategoryItems(items, category)
        let result = []
        filteredList.map(
            item => (
                result.push(
                    <Checkbox
                        id={item.name}
                        key={item.name}
                        type={"checkbox"}
                        name={item.name}
                        checked={this.props.values.checkedItems.get(item.name)}
                        onChange={this.props.handleCheckboxChange}
                    />
                )
            )
            )
            return result
    } 

    render() {
    return (
        <div>
        <div className="on-boarding-nav">
            <button onClick={this.back}>Back</button>
            <Link to="/">
            <img src="images/logo/on-boarding-logo.png" alt="" />
            </Link>
        </div>

        <div className="on-boarding-container container">
            <h2>Select your favorites (Seafood)</h2>
            <p>Here you can select your favorite Seafood items. We recommend selecting things you eat on a regular basis.</p>
            <ul className="checkbox-grid">
                {this.createCheckboxesFromApi(this.props.foodProfile, "Seafood")}
            </ul>
        </div>

        <div className="on-boarding-footer">
            <button onClick={this.continue}>Next</button>
        </div>
        </div>
    );
    }
}

export default Seafood;
