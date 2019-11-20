const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
      type: String,
      required: true,
      min: 5,
      max: 300
  },
  email: {
    type: String,
    required: true,
    min: 5,
    max: 300
  },
  password: {
      type: String,
      required: true,
      max: 1000,
      min: 6
  },
  date: {
      type: Date,
      default: Date.now
  }
})

module.exports = mongoose.model("User", userSchema)