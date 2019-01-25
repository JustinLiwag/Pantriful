import React, { PureComponent } from "react";
import CheckboxFieldGroup from "../../../common/checkboxFieldGroup";

const ITEM_LIST = [
  { name: "Potato", stateName: "potato" },
  { name: "Sweet Potato", stateName: "sweetPotato" },
  { name: "Pumkpin", stateName: "pumkin" },
  { name: "Cauliflower", stateName: "cauliflower" },
  { name: "Green Beans", stateName: "greenBeans" },
  { name: "Spinach", stateName: "spinach" },
  { name: "Cabbage", stateName: "cabbage" },
  { name: "Brussel Sprouts", stateName: "brusselSprouts" },
  { name: "Peas", stateName: "peas" },
  { name: "Broccoli", stateName: "broccoli" },
  { name: "Carrots", stateName: "carrots" },
  { name: "Zucchini", stateName: "zucchini" },
  { name: "Eggplant", stateName: "eggplant" },
  { name: "Squash", stateName: "squash" },
  { name: "Bell Peppers", stateName: "bellPeppers" },
  { name: "Corn", stateName: "corn" },
  { name: "Mushrooms", stateName: "mushrooms" },
  { name: "Tomatoes", stateName: "tomatoes" },
  { name: "Lettuce", stateName: "lettuce" },
  { name: "Celery", stateName: "celery" },
  { name: "Avocado", stateName: "avocado" },
  { name: "Onions", stateName: "onions" },
  { name: "BokChoy", stateName: "bokChoy" },
  { name: "Asparagus", stateName: "asparagus" }
];

class Vegetables extends PureComponent {
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

export default Vegetables;
