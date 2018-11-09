const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodProfileSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  username: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  dietOrientation: {
    type: String,
    default: "Nothing Specific"
  },
  dietaryRestrictions: {
    type: [String]
  },
  protein: {
    chickenLegQuarters: {
      basePrice: { type: Number, default: 0.89 },
      lowPrice: { type: Number, default: 0.5 },
      upperPrice: { type: Number, default: 1 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    wholeChicken: {
      basePrice: { type: Number, default: 0.94 },
      lowPrice: { type: Number, default: 0.5 },
      upperPrice: { type: Number, default: 1.2 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    chickenDrumstick: {
      basePrice: { type: Number, default: 1.2 },
      lowPrice: { type: Number, default: 1 },
      upperPrice: { type: Number, default: 1.5 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    boneInChickenThigh: {
      basePrice: { type: Number, default: 1.25 },
      lowPrice: { type: Number, default: 1 },
      upperPrice: { type: Number, default: 1.5 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    splitChickenBreast: {
      basePrice: { type: Number, default: 0.89 },
      lowPrice: { type: Number, default: 0.5 },
      upperPrice: { type: Number, default: 1 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    bonelessSkinlessChickenThighs: {
      basePrice: { type: Number, default: 2.28 },
      lowPrice: { type: Number, default: 1.8 },
      upperPrice: { type: Number, default: 2.5 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    chickenWings: {
      basePrice: { type: Number, default: 2.4 },
      lowPrice: { type: Number, default: 2.0 },
      upperPrice: { type: Number, default: 2.75 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    },
    bonelessChickenBreast: {
      basePrice: { type: Number, default: 3.33 },
      lowPrice: { type: Number, default: 3.0 },
      upperPrice: { type: Number, default: 3.5 },
      measurementUnit: { type: String, default: "Pounds" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    }
  },
  vegetarianProteinAndAlternatives: {
    eggs: {
      basePrice: { type: Number, default: 3.5 },
      lowPrice: { type: Number, default: 3.0 },
      upperPrice: { type: Number, default: 4.0 },
      measurementUnit: { type: String, default: "Dozen" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    }
  },
  vegetables: {
    potato: {
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
    apples: {
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
    slicedBread: {
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
      basePrice: { type: Number, default: 00 },
      lowPrice: { type: Number, default: 00 },
      upperPrice: { type: Number, default: 00 },
      measurementUnit: { type: String, default: "Gallons" },
      active: { type: Boolean, default: false },
      amount: { type: Number },
      notes: { type: String }
    }
  },
  groceryLists: {},
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = FoodProfile = mongoose.model(
  "food profile",
  foodProfileSchema
);
