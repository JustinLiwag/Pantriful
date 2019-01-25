import React, { PureComponent } from "react";
import CheckboxFieldGroup from "../../../common/checkboxFieldGroup";

const ITEM_LIST = [
  { name: "Peanuts", stateName: "peanuts" },
  { name: "Cashews", stateName: "cashews" },
  { name: "Almonds", stateName: "almonds" },
  { name: "Peannut Butter", stateName: "peanutButter" },
  { name: "Eggs", stateName: "eggs" },
  { name: "Soy Beans (Tofu)", stateName: "soybeansTofu" },
  { name: "Beans", stateName: "beans" },
  { name: "Lentils", stateName: "lentils" }
];

class AlternativeProteins extends PureComponent {
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

export default AlternativeProteins;
