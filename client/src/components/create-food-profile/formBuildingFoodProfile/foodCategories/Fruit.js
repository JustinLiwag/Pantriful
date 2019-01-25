import React, { PureComponent } from "react";
import CheckboxFieldGroup from "../../../common/checkboxFieldGroup";

const ITEM_LIST = [
  { name: "Apples", stateName: "apples" },
  { name: "Pears", stateName: "pears" },
  { name: "Oranges", stateName: "oranges" },
  { name: "Grapefruit", stateName: "grapfruit" },
  { name: "Banana", stateName: "banana" },
  { name: "Peach", stateName: "peach" },
  { name: "Plum", stateName: "plum" },
  { name: "Nectarine", stateName: "nectarine" },
  { name: "Apricot", stateName: "apricot" },
  { name: "Mango", stateName: "mango" },
  { name: "Pineapple", stateName: "pineapple" },
  { name: "Grapes", stateName: "grapes" },
  { name: "Strawberries", stateName: "strawberries" },
  { name: "Blueberries", stateName: "blueberries" },
  { name: "Watermelon", stateName: "watermelon" },
  { name: "Cantelope", stateName: "cantelope" }
];

class Fruit extends PureComponent {
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

export default Fruit;
