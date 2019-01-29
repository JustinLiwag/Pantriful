const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const masterFoodProfileSchema = mongoose.Schema({
  name: { type: String, required: true },
  item_id: { type: String, required: true },
  basePrice: { type: Number, required: true, default: 0 },
  lowPrice: { type: Number, default: 0 },
  upperPrice: { type: Number, default: 0 },
  measurementUnit: { type: String, required: true },
  category: { type: String, required: true }
});

module.exports = MasterFoodProfile = mongoose.model(
  "master food profile",
  masterFoodProfileSchema
);
