const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const masterFoodProfileSchema = mongoose.Schema({
  name: { type: String, required: true, unique: 1 },
  item_id: { type: String, required: true, unique: 1 },
  basePrice: { type: Number, required: true, default: 0.89 },
  lowPrice: { type: Number, default: 0.5 },
  upperPrice: { type: Number, default: 1 },
  measurementUnit: { type: String, required: true },
  active: { type: Boolean, default: false },
  category: { type: String, required: true }
});

module.exports = MasterFoodProfile = mongoose.model(
  "master food profile",
  masterFoodProfileSchema
);
