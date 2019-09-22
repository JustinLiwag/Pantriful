const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  street: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  country: {
    type: String
  },
  zipcode: {
    type: Number
  },
  aptOrBldgNumber: {
    type: String
  },
  deliveryDay: {
    type: String
  },
  deliveryTime: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  email: {
    type: String,
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
  },
  active: {
    type: Boolean,
    default: true
  }
});

module.exports = FoodProfile = mongoose.model("profile", profileSchema);
