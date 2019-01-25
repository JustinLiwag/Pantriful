import React, { PureComponent } from "react";
import CheckboxFieldGroup from "../../../common/checkboxFieldGroup";

const ITEM_LIST = [
  { name: "Milk", stateName: "milk" },
  { name: "Ice Cream", stateName: "iceCream" },
  { name: "Yogurt", stateName: "yogurt" },
  { name: "Cottage Cheese", stateName: "cottageCheese" },
  { name: "Cheese", stateName: "cheese" },
  { name: "Cheese Spread", stateName: "cheeseSpread" }
];

class Dairy extends PureComponent {
  createCheckbox = list => {
    let checkboxes = [];
    for (var i = 0; i < list.length; i++) {
      checkboxes.push(
        <CheckboxFieldGroup
          key={i}
          type={"checkbox"}
          name={list[i].name}
          onChange={this.props.handleChange(list[i].stateName)}
          label={list[i].name}
          checked={this.props.value[list[i].stateName]}
        />
      );
    }
    return checkboxes;
  };

  render() {
    return <div>{this.createCheckbox(ITEM_LIST)}</div>;
  }
}

export default Dairy;
