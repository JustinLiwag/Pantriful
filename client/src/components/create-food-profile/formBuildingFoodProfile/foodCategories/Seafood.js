import React, { PureComponent } from "react";
import CheckboxFieldGroup from "../../../common/checkboxFieldGroup";

const ITEM_LIST = [
  { name: "Salmon", stateName: "salmon" },
  { name: "Shrimp", stateName: "shrimp" },
  { name: "Tilapia", stateName: "tilapia" },
  { name: "Cod", stateName: "cod" },
  { name: "Lobster", stateName: "lobster" },
  { name: "Scallops", stateName: "scallops" },
  { name: "Crabs", stateName: "crabs" },
  { name: "Tuna Fillet", stateName: "tuneFillet" },
  { name: "Canned Tuna", stateName: "cannedTuna" }
];

class Seafood extends PureComponent {
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

export default Seafood;
