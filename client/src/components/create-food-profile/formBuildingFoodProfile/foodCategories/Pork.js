import React, { PureComponent } from "react";
import CheckboxFieldGroup from "../../../common/checkboxFieldGroup";

const ITEM_LIST = [
  { name: "Pork Baby Back Ribs", stateName: "porkBabyBackRibs" },
  { name: "Bacon", stateName: "bacon" },
  { name: "Ham", stateName: "ham" },
  { name: "Sausage", stateName: "sausage" },
  { name: "Bratwurst", stateName: "bratwurst" },
  { name: "Pork Butt", stateName: "porkButt" },
  { name: "Pork Chops", stateName: "porkChops" },
  { name: "Pork Loin", stateName: "porkLoin" },
  { name: "Spare Ribs", stateName: "spareRibs" },
  { name: "Ground Pork", stateName: "groundPork" }
];

class Pork extends PureComponent {
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

export default Pork;
