const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true,
  },
  departs: {
    type: Date,
    // default: new Date().getFullYear(),
  },
});

const Flight = mongoose.model("Flight", flightSchema);
module.exports = Flight;
