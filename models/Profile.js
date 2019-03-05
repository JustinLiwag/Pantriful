const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  dietProfile: [],
  dietaryRestrictions: {
    type: [String]
  },
  foodProfile: [],
  shoppingListOne: [],
  shoppingListTwo: [],
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = FoodProfile = mongoose.model("profile", profileSchema);
