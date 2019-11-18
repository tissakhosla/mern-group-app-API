const Agenda = require('../models/Agenda')

module.exports = {
  index: (req, res) => {
    Agenda.find({})
      .then(agenda => {
        res.json(agenda)
      })
  },
  findById: function (req, res) {
    Agenda.findById({ _id: req.params._id })
      .then(agenda => {
        res.json(agenda)
      })
  },
  create: (req, res) => {
    Agenda.create(req.body)
      .then(agenda => {
        res.json(agenda)
      })
  },
  updateById: (req, res) => {
    Agenda.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
      .then(agenda => {
        res.json(agenda)
      })
  },
  deleteById: (req, res) => {
    Agenda.findOneAndDelete({_id: req.params._id})
      .then(agenda => {
        res.json(agenda)
      }) 
  }
}