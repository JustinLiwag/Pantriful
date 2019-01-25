import React from "react";
import PropTypes from "prop-types";

const foodProfileData = {
  protein: {
    // Chicken
    chickenLegQuarters: {
      basePrice: { type: Number, default: 0.89 },
      lowPrice: { type: Number, default: 0.5 },
      upperPrice: { type: Number, default: 1 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Chicken" },
      amount: { type: Number },
      notes: { type: String }
    },
    wholeChicken: {
      basePrice: { type: Number, default: 0.94 },
      lowPrice: { type: Number, default: 0.5 },
      upperPrice: { type: Number, default: 1.2 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Chicken" },
      amount: { type: Number },
      notes: { type: String }
    },
    chickenDrumstick: {
      basePrice: { type: Number, default: 1.2 },
      lowPrice: { type: Number, default: 1 },
      upperPrice: { type: Number, default: 1.5 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Chicken" },
      amount: { type: Number },
      notes: { type: String }
    },
    boneInChickenThigh: {
      basePrice: { type: Number, default: 1.25 },
      lowPrice: { type: Number, default: 1 },
      upperPrice: { type: Number, default: 1.5 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Chicken" },
      amount: { type: Number },
      notes: { type: String }
    },
    splitChickenBreast: {
      basePrice: { type: Number, default: 0.89 },
      lowPrice: { type: Number, default: 0.5 },
      upperPrice: { type: Number, default: 1 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Chicken" },
      amount: { type: Number },
      notes: { type: String }
    },
    bonelessSkinlessChickenThighs: {
      basePrice: { type: Number, default: 2.28 },
      lowPrice: { type: Number, default: 1.8 },
      upperPrice: { type: Number, default: 2.5 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Chicken" },
      amount: { type: Number },
      notes: { type: String }
    },
    chickenWings: {
      basePrice: { type: Number, default: 2.4 },
      lowPrice: { type: Number, default: 2.0 },
      upperPrice: { type: Number, default: 2.75 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Chicken" },
      amount: { type: Number },
      notes: { type: String }
    },
    bonelessChickenBreast: {
      basePrice: { type: Number, default: 3.33 },
      lowPrice: { type: Number, default: 3.0 },
      upperPrice: { type: Number, default: 3.5 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Chicken" },
      amount: { type: Number },
      notes: { type: String }
    },
    // Beef
    beefStirFry: {
      basePrice: { type: Number, default: 4.89 },
      lowPrice: { type: Number, default: 4.5 },
      upperPrice: { type: Number, default: 5.0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Beef" },
      amount: { type: Number },
      notes: { type: String }
    },
    groundBeef: {
      basePrice: { type: Number, default: 5.29 },
      lowPrice: { type: Number, default: 5.0 },
      upperPrice: { type: Number, default: 5.5 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Beef" },
      amount: { type: Number },
      notes: { type: String }
    },
    roundRoastSteak: {
      basePrice: { type: Number, default: 4.69 },
      lowPrice: { type: Number, default: 4.5 },
      upperPrice: { type: Number, default: 5.0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Beef" },
      amount: { type: Number },
      notes: { type: String }
    },
    skirtSteak: {
      basePrice: { type: Number, default: 5.69 },
      lowPrice: { type: Number, default: 5.5 },
      upperPrice: { type: Number, default: 6.0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Beef" },
      amount: { type: Number },
      notes: { type: String }
    },
    flankSteak: {
      basePrice: { type: Number, default: 7.49 },
      lowPrice: { type: Number, default: 7.25 },
      upperPrice: { type: Number, default: 7.75 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Beef" },
      amount: { type: Number },
      notes: { type: String }
    },
    beefShortRibs: {
      basePrice: { type: Number, default: 3.99 },
      lowPrice: { type: Number, default: 3.75 },
      upperPrice: { type: Number, default: 4.25 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Beef" },
      amount: { type: Number },
      notes: { type: String }
    },
    brisket: {
      basePrice: { type: Number, default: 4.99 },
      lowPrice: { type: Number, default: 4.75 },
      upperPrice: { type: Number, default: 5.25 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Beef" },
      amount: { type: Number },
      notes: { type: String }
    },
    sirloinSteak: {
      basePrice: { type: Number, default: 5.99 },
      lowPrice: { type: Number, default: 5.75 },
      upperPrice: { type: Number, default: 5.25 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Beef" },
      amount: { type: Number },
      notes: { type: String }
    },
    tritip: {
      basePrice: { type: Number, default: 6.39 },
      lowPrice: { type: Number, default: 6.15 },
      upperPrice: { type: Number, default: 6.5 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Beef" },
      amount: { type: Number },
      notes: { type: String }
    },
    porterhouse: {
      basePrice: { type: Number, default: 12.69 },
      lowPrice: { type: Number, default: 12.5 },
      upperPrice: { type: Number, default: 12.8 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Beef" },
      amount: { type: Number },
      notes: { type: String }
    },
    tBone: {
      basePrice: { type: Number, default: 12.49 },
      lowPrice: { type: Number, default: 12.25 },
      upperPrice: { type: Number, default: 12.75 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Beef" },
      amount: { type: Number },
      notes: { type: String }
    },
    tenderloin: {
      basePrice: { type: Number, default: 9.62 },
      lowPrice: { type: Number, default: 9.5 },
      upperPrice: { type: Number, default: 9.8 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Beef" },
      amount: { type: Number },
      notes: { type: String }
    },
    ribeye: {
      // Correct Prices
      basePrice: { type: Number, default: 11.5 },
      lowPrice: { type: Number, default: 9.99 },
      upperPrice: { type: Number, default: 13.49 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Beef" },
      amount: { type: Number },
      notes: { type: String }
    },
    beefBackRibs: {
      basePrice: { type: Number, default: 4.19 },
      lowPrice: { type: Number, default: 4.0 },
      upperPrice: { type: Number, default: 4.4 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Beef" },
      amount: { type: Number },
      notes: { type: String }
    },
    chuckRoast: {
      basePrice: { type: Number, default: 4.99 },
      lowPrice: { type: Number, default: 4.75 },
      upperPrice: { type: Number, default: 5.25 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Beef" },
      amount: { type: Number },
      notes: { type: String }
    },
    // Pork
    porkBabyBackRibs: {
      basePrice: { type: Number, default: 4.89 },
      lowPrice: { type: Number, default: 4.6 },
      upperPrice: { type: Number, default: 5.0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Pork" },
      amount: { type: Number },
      notes: { type: String }
    },
    bacon: {
      basePrice: { type: Number, default: 4.89 },
      lowPrice: { type: Number, default: 4.6 },
      upperPrice: { type: Number, default: 5.0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Pork" },
      amount: { type: Number },
      notes: { type: String }
    },
    ham: {
      basePrice: { type: Number, default: 3.99 },
      lowPrice: { type: Number, default: 3.75 },
      upperPrice: { type: Number, default: 4.25 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Pork" },
      amount: { type: Number },
      notes: { type: String }
    },
    sausage: {
      basePrice: { type: Number, default: 3.49 },
      lowPrice: { type: Number, default: 3.25 },
      upperPrice: { type: Number, default: 3.75 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Pork" },
      amount: { type: Number },
      notes: { type: String }
    },
    bratwurst: {
      basePrice: { type: Number, default: 3.99 },
      lowPrice: { type: Number, default: 3.75 },
      upperPrice: { type: Number, default: 4.25 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Pork" },
      amount: { type: Number },
      notes: { type: String }
    },
    porkButt: {
      basePrice: { type: Number, default: 1.99 },
      lowPrice: { type: Number, default: 1.75 },
      upperPrice: { type: Number, default: 2.25 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Pork" },
      amount: { type: Number },
      notes: { type: String }
    },
    porkChops: {
      basePrice: { type: Number, default: 4.39 },
      lowPrice: { type: Number, default: 4.15 },
      upperPrice: { type: Number, default: 4.5 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Pork" },
      amount: { type: Number },
      notes: { type: String }
    },
    porkLoin: {
      basePrice: { type: Number, default: 3.99 },
      lowPrice: { type: Number, default: 3.75 },
      upperPrice: { type: Number, default: 4.25 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Pork" },
      amount: { type: Number },
      notes: { type: String }
    },
    spareRibs: {
      basePrice: { type: Number, default: 3.59 },
      lowPrice: { type: Number, default: 4.6 },
      upperPrice: { type: Number, default: 5.0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Pork" },
      amount: { type: Number },
      notes: { type: String }
    },
    groundPork: {
      basePrice: { type: Number, default: 3.39 },
      lowPrice: { type: Number, default: 3.15 },
      upperPrice: { type: Number, default: 3.5 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Pork" },
      amount: { type: Number },
      notes: { type: String }
    },

    // Lamb / Turkey
    // Correct Prices
    lambChops: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Lamb" },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    legofLamb: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Lamb" },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    groundTurkey: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Turkey" },
      amount: { type: Number },
      notes: { type: String }
    },

    // Seafood
    // Correct Prices
    salmon: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Seafood" },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    shrimp: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Seafood" },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    tilapia: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Seafood" },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    cod: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Seafood" },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    lobster: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Seafood" },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    scallops: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Seafood" },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    crabs: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Seafood" },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    tuneFillet: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Seafood" },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    cannedTuna: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      category: { type: String, default: "Seafood" },
      amount: { type: Number },
      notes: { type: String }
    }
  },
  vegetarianProteinAndAlternatives: {
    // Correct Prices
    peanuts: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    cashews: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    almonds: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    peanutButter: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Jar" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    eggs: {
      basePrice: { type: Number, default: 3.5 },
      lowPrice: { type: Number, default: 3.0 },
      upperPrice: { type: Number, default: 4.0 },
      measurementUnit: { type: String, default: "Dozen" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    soybeansTofu: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Package" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    beans: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    lentils: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    }
  },
  vegetables: {
    // Correct Prices
    potato: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    sweetPotato: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    pumpkin: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    cauliflower: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    greenBeans: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    spinach: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    cabbage: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    brusselSprouts: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    peas: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    broccoli: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    carrots: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    zucchini: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    eggplant: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    squash: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    bellPeppers: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    corn: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    mushrooms: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    tomatoes: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    lettuce: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    celery: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    avocado: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    onions: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    bokChoy: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    asparagus: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    }
  },
  fruits: {
    // Correct Prices
    apples: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    pears: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    oranges: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    grapfruit: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    banana: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    peach: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    plum: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    nectarine: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    apricot: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    mango: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    pineapple: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    grapes: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    strawberries: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    blueberries: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    watermelon: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    cantelope: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    }
  },
  grains: {
    // Correct Prices
    slicedBread: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Bag" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    bagels: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Bag" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    oatmeal: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Bag" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    porridge: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Bag" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    pitaBread: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Bag" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    tortillas: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Bag" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    pasta: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Bag" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    noodles: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Bag" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    muffins: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Bag" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    cereal: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Bag" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    quinoa: {
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Bag" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    }
  },
  dairy: {
    milk: {
      basePrice: { type: Number, default: 3.16 },
      lowPrice: { type: Number, default: 3.0 },
      upperPrice: { type: Number, default: 3.25 },
      measurementUnit: { type: String, default: "Gallons" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    iceCream: {
      basePrice: { type: Number, default: 3.5 },
      lowPrice: { type: Number, default: 3.0 },
      upperPrice: { type: Number, default: 4.0 },
      measurementUnit: { type: String, default: "Pint" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    yogurt: {
      basePrice: { type: Number, default: 1.5 },
      lowPrice: { type: Number, default: 1.25 },
      upperPrice: { type: Number, default: 1.75 },
      measurementUnit: { type: String, default: "cup" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    cottageCheese: {
      basePrice: { type: Number, default: 1.99 },
      lowPrice: { type: Number, default: 1.75 },
      upperPrice: { type: Number, default: 2.25 },
      measurementUnit: { type: String, default: "Container" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    cheese: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pound" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    // Correct Prices
    cheeseSpread: {
      basePrice: { type: Number, default: 0 },
      lowPrice: { type: Number, default: 0 },
      upperPrice: { type: Number, default: 0 },
      measurementUnit: { type: String, default: "Pound" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    }
  }
};


const selectedFoods = (data) => {
  return (

};

export default selectedFoods;
