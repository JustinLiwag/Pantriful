import React, { PureComponent } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

import FormBasicInformation from "./FormBasicInformation";
import DemoBox from "./demoBox";
import FormBuildingFoodProfileOne from "./formBuildingFoodProfile/FormBuildingFoodProfileOne";
import FormBuildingFoodProfileTwo from "./formBuildingFoodProfile/FormBuildingFoodProfileTwo";
import FormShoppingListOne from "./shoppingLists/FormShoppingListOne";
import FormShoppingListTwo from "./shoppingLists/FormShoppingListTwo";

class CreateProfile extends PureComponent {
  state = {
    step: 1,
    age: "",
    height: "",
    weight: "",
    dietOrientation: "",
    dietaryRestrictions: "",
    // Chicken
    chickenLegQuarters: false,
    wholeChicken: false,
    chickenDrumstick: false,
    boneInChickenThigh: false,
    splitChickenBreast: false,
    bonelessSkinlessChickenThighs: false,
    chickenWings: false,
    bonelessChickenBreast: false,
    // Beef
    beefStirFry: false,
    groundBeef: false,
    roundRoastSteak: false,
    skirtSteak: false,
    flankSteak: false,
    beefShortRibs: false,
    brisket: false,
    sirloinSteak: false,
    tritip: false,
    porterhouse: false,
    tBone: false,
    tenderloin: false,
    ribeye: false,
    beefBackRibs: false,
    chuckRoast: false,
    // Pork
    porkBabyBackRibs: false,
    bacon: false,
    ham: false,
    sausage: false,
    bratwurst: false,
    porkButt: false,
    porkChops: false,
    porkLoin: false,
    spareRibs: false,
    groundPork: false,
    // Lamb/Turkey
    lambChops: false,
    legofLamb: false,
    groundTurkey: false,
    // Seafood
    salmon: false,
    shrimp: false,
    tilapia: false,
    cod: false,
    lobster: false,
    scallops: false,
    crabs: false,
    tuneFillet: false,
    cannedTuna: false,
    // Grains
    slicedBread: false,
    bagels: false,
    oatmeal: false,
    porridge: false,
    pitaBread: false,
    tortillas: false,
    pasta: false,
    noodles: false,
    muffins: false,
    cereal: false,
    quinoa: false,
    // Dairy
    milk: false,
    iceCream: false,
    yogurt: false,
    cottageCheese: false,
    cheese: false,
    cheeseSpread: false,
    // Alternative Proteins
    peanuts: false,
    cashews: false,
    almonds: false,
    peanutButter: false,
    eggs: false,
    soybeansTofu: false,
    beans: false,
    lentils: false,
    // Vegetables
    potato: false,
    sweetPotato: false,
    pumpkin: false,
    cauliflower: false,
    greenBeans: false,
    spinach: false,
    cabbage: false,
    brusselSprouts: false,
    peas: false,
    broccoli: false,
    carrots: false,
    zucchini: false,
    eggplant: false,
    squash: false,
    bellPeppers: false,
    corn: false,
    mushrooms: false,
    tomatoes: false,
    lettuce: false,
    celery: false,
    avocado: false,
    onions: false,
    bokChoy: false,
    asparagus: false,
    // Fruits
    apples: false,
    pears: false,
    oranges: false,
    grapfruit: false,
    banana: false,
    peach: false,
    plum: false,
    nectarine: false,
    apricot: false,
    mango: false,
    pineapple: false,
    grapes: false,
    strawberries: false,
    blueberries: false,
    watermelon: false,
    cantelope: false
  };

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Proceed to the previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  // Handle checkbox change
  handleCheckboxChange = input => e => {
    this.setState(prevState => ({
      [input]: !prevState[input]
    }));
  };

  checkboxValue = input => e => {};

  render() {
    const { step } = this.state;
    const {
      age,
      height,
      weight,
      dietOrientation,
      dietaryRestrictions,
      chickenLegQuarters,
      wholeChicken,
      chickenDrumstick,
      boneInChickenThigh,
      splitChickenBreast,
      bonelessSkinlessChickenThighs,
      chickenWings,
      bonelessChickenBreast,
      beefStirFry,
      groundBeef,
      roundRoastSteak,
      skirtSteak,
      flankSteak,
      beefShortRibs,
      brisket,
      sirloinSteak,
      tritip,
      porterhouse,
      tBone,
      tenderloin,
      ribeye,
      beefBackRibs,
      chuckRoast,
      porkBabyBackRibs,
      bacon,
      ham,
      sausage,
      bratwurst,
      porkButt,
      porkChops,
      porkLoin,
      spareRibs,
      groundPork,
      lambChops,
      legofLamb,
      groundTurkey,
      salmon,
      shrimp,
      tilapia,
      cod,
      lobster,
      scallops,
      crabs,
      tuneFillet,
      cannedTuna,
      // Grains
      slicedBread,
      bagels,
      oatmeal,
      porridge,
      pitaBread,
      tortillas,
      pasta,
      noodles,
      muffins,
      cereal,
      quinoa,
      // Dairy
      milk,
      iceCream,
      yogurt,
      cottageCheese,
      cheese,
      cheeseSpread,
      // Alternative Proteins
      peanuts,
      cashews,
      almonds,
      peanutButter,
      eggs,
      soybeansTofu,
      beans,
      lentils,
      // Vegetables
      potato,
      sweetPotato,
      pumpkin,
      cauliflower,
      greenBeans,
      spinach,
      cabbage,
      brusselSprouts,
      peas,
      broccoli,
      carrots,
      zucchini,
      eggplant,
      squash,
      bellPeppers,
      corn,
      mushrooms,
      tomatoes,
      lettuce,
      celery,
      avocado,
      onions,
      bokChoy,
      asparagus,
      // Fruits
      apples,
      pears,
      oranges,
      grapfruit,
      banana,
      peach,
      plum,
      nectarine,
      apricot,
      mango,
      pineapple,
      grapes,
      strawberries,
      blueberries,
      watermelon,
      cantelope
    } = this.state;
    const values = {
      age,
      height,
      weight,
      dietOrientation,
      dietaryRestrictions,
      chickenLegQuarters,
      wholeChicken,
      chickenDrumstick,
      boneInChickenThigh,
      splitChickenBreast,
      bonelessSkinlessChickenThighs,
      chickenWings,
      bonelessChickenBreast,
      beefStirFry,
      groundBeef,
      roundRoastSteak,
      skirtSteak,
      flankSteak,
      beefShortRibs,
      brisket,
      sirloinSteak,
      tritip,
      porterhouse,
      tBone,
      tenderloin,
      ribeye,
      beefBackRibs,
      chuckRoast,
      porkBabyBackRibs,
      bacon,
      ham,
      sausage,
      bratwurst,
      porkButt,
      porkChops,
      porkLoin,
      spareRibs,
      groundPork,
      lambChops,
      legofLamb,
      groundTurkey,
      salmon,
      shrimp,
      tilapia,
      cod,
      lobster,
      scallops,
      crabs,
      tuneFillet,
      cannedTuna,
      // Grains
      slicedBread,
      bagels,
      oatmeal,
      porridge,
      pitaBread,
      tortillas,
      pasta,
      noodles,
      muffins,
      cereal,
      quinoa,
      // Dairy
      milk,
      iceCream,
      yogurt,
      cottageCheese,
      cheese,
      cheeseSpread,
      // Alternative Proteins
      peanuts,
      cashews,
      almonds,
      peanutButter,
      eggs,
      soybeansTofu,
      beans,
      lentils,
      // Vegetables
      potato,
      sweetPotato,
      pumpkin,
      cauliflower,
      greenBeans,
      spinach,
      cabbage,
      brusselSprouts,
      peas,
      broccoli,
      carrots,
      zucchini,
      eggplant,
      squash,
      bellPeppers,
      corn,
      mushrooms,
      tomatoes,
      lettuce,
      celery,
      avocado,
      onions,
      bokChoy,
      asparagus,
      // Fruits
      apples,
      pears,
      oranges,
      grapfruit,
      banana,
      peach,
      plum,
      nectarine,
      apricot,
      mango,
      pineapple,
      grapes,
      strawberries,
      blueberries,
      watermelon,
      cantelope
    };

    switch (step) {
      case 1:
        return (
          <FormBasicInformation
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormBuildingFoodProfileOne
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleCheckboxChange}
            value={values}
          />
        );
      case 3:
        return (
          <FormBuildingFoodProfileTwo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleCheckboxChange}
            value={values}
          />
        );
      case 4:
        return (
          <FormShoppingListOne
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <FormShoppingListTwo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <DemoBox
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      default:
        return null;
    }
  }
}

export default connect(null)(CreateProfile);
