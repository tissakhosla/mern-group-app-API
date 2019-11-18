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

const skillSchema = new Schema({
  skill: String,
  proficiency: Number,
  example: String
})

const agendaSchema = new Schema({
  eventType: String,
  dateAndTime: Date,
  description: String
})



module.exports = mongoose.model("Agenda", agendaSchema)
module.exports = mongoose.model("Skill", skillSchema)
module.exports = mongoose.model("Application", applicationSchema)