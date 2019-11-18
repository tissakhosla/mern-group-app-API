const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;


const applicationSchema = new Schema({
  company: String,
  position: String,
  link: String,
  rate: Number,
  contacts: String,
  status: Boolean
})

module.exports = mongoose.model("Application", applicationSchema)