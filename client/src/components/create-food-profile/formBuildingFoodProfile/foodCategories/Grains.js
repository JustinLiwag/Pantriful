import React, { PureComponent } from "react";
import CheckboxFieldGroup from "../../../common/checkboxFieldGroup";

const ITEM_LIST = [
  { name: "Sliced Bread", stateName: "slicedBread" },
  { name: "Bagels", stateName: "bagels" },
  { name: "Oatmeal", stateName: "oatmeal" },
  { name: "Porridge", stateName: "porridge" },
  { name: "Pita Bread", stateName: "pitaBread" },
  { name: "Tortillas", stateName: "tortillas" },
  { name: "Pasta", stateName: "pasta" },
  { name: "Noodles", stateName: "noodles" },
  { name: "Muffins", stateName: "muffins" },
  { name: "Cereal", stateName: "cereal" },
  { name: "Quinoa", stateName: "quinoa" }
];

class Grains extends PureComponent {
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

export default Grains;
