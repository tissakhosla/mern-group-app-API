const Application = require('../models/Agenda')

module.exports = {
  index: (req, res) => {
    Tracker.find({})
      .then(user => {
        res.json(user)
      })
  },
  update: function (req, res) { //u
    Tracker.findOneAndUpdate({name: req.params.name}, req.body, { new: true, useFindAndModify: false })
      .then(program => {
        res.json(program)
      })
  },
}