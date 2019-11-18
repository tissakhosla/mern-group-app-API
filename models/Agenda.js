const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;


const agendaSchema = new Schema({
    eventType: String,
    dateAndTime: Date,
    description: String
  })
  
  
  
  module.exports = mongoose.model("Agenda", agendaSchema)