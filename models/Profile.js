const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodProfileSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  item_id: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  measurementUnit: {
    type: String,
    required: true
  },
  lowPrice: {
    type: Number,
    required: true
  },
  upperPrice: {
    type: Number,
    required: true
  },
  basePrice: {
    type: Number,
    required: true
  }
});

const profileSchema = mongoose.Schema({
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
  foodProfile: [foodProfileSchema],
  groceryLists: [],
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = FoodProfile = mongoose.model("profile", profileSchema);
