const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: Number,
  email: String
})

const statusSchema = new Schema({
  submitted: Boolean,
  date: Date
})

const applicationSchema = new Schema({
  company: String,
  position: Number,
  link: String,
  rate: Number,
  contacts: [contactSchema],
  status: [statusSchema]
})

const skillSchema = new Schema({
  skill: String,
  proficiency: Number,
  examples: [String]
})

const agendaSchema = new Schema({
  eventType: String,
  date: Date,
  time: String,
  description: String
})

const trackerSchema = new Schema({
  userName: String,
  headShot: String,
  skills: [skillSchema],
  applications: [applicationSchema],
  agenda: [agendaSchema]
})

module.exports = mongoose.model("Tracker", trackerSchema)