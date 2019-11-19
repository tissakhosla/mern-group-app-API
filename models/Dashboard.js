const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

require('../models/Agenda')
require('../models/Application')
require('../models/Skill')

const dashboardSchema = new Schema({
  agenda: [{
    type: Schema.Types.ObjectId,
    ref: "Agenda",
  }],
  applications: [{
    type: Schema.Types.ObjectId,
    ref: "Application",
  }],
  skills: [{
    type: Schema.Types.ObjectId,
    ref: "Skill",
  }]
})

module.exports = mongoose.model("Dashboard", dashboardSchema)