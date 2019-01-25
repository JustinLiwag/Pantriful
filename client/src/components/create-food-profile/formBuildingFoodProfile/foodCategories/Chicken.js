import React, { PureComponent } from "react";
import CheckboxFieldGroup from "../../../common/checkboxFieldGroup";

const ITEM_LIST = [
  { name: "Chicken Leg Quarters", stateName: "chickenLegQuarters" },
  { name: "Whole Chicken", stateName: "wholeChicken" },
  { name: "Chicken Drumstick", stateName: "chickenDrumstick" },
  { name: "Bone-in Chicken Thigh", stateName: "boneInChickenThigh" },
  { name: "Split Chicken Breast", stateName: "splitChickenBreast" },
  {
    name: "Boneless Skinless Chicken Thigh",
    stateName: "bonelessSkinlessChickenThighs"
  },
  { name: "Chicken Wings", stateName: "chickenWings" },
  { name: "Boneless Chicken Breast", stateName: "bonelessChickenBreast" }
];

class Chicken extends PureComponent {
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

export default Chicken;
