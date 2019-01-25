import React, { PureComponent } from "react";
import CheckboxFieldGroup from "../../../common/checkboxFieldGroup";

const ITEM_LIST = [
  { name: "Beef Stir Fry", stateName: "beefStirFry" },
  { name: "Ground Beef", stateName: "groundBeef" },
  { name: "Round Roast Steak", stateName: "roundRoastSteak" },
  { name: "Skirt Steak", stateName: "skirtSteak" },
  { name: "Flank Steak", stateName: "flankSteak" },
  { name: "Beef Short Ribs", stateName: "beefShortRibs" },
  { name: "Brisket", stateName: "brisket" },
  { name: "Sirloin Steak", stateName: "sirloinSteak" },
  { name: "Tri Tip", stateName: "tritip" },
  { name: "Porterhouse", stateName: "porterhouse" },
  { name: "T-Bone Steak", stateName: "tBone" },
  { name: "Tenderloin", stateName: "tenderloin" },
  { name: "Ribeye", stateName: "ribeye" },
  { name: "Beef Back Ribs", stateName: "beefBackRibs" },
  { name: "Chuck Roast", stateName: "chuckRoast" }
];

class Beef extends PureComponent {
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

export default Beef;
