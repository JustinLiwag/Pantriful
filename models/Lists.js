const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = mongoose.Schema({
    list: [],
    status: { type: String, default: "Awaiting" },
    deliveryDate: { type: Date, required: true },
    email: { type: String }
});

module.exports = List = mongoose.model(
    "grocery lists",
    ListSchema
);
