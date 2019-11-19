const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const skillSchema = new Schema({
  skill: String,
  proficiency: Number,
  example: Array
})

module.exports = mongoose.model("Skill", skillSchema)