const Application = require('../models/Application')

module.exports = {
  index: (req, res) => {
    Application.find({})
      .then(application => {
        res.json(application)
      })
  },
  findById: function (req, res) { //u
    Application.findById({ _id: req.params._id })
      .then(application => {
        res.json(application)
      })
  },
  findByCompany: function (req, res) { //u
    Application.find({ company: req.params.company })
      .then(application => {
        res.json(application)
      })
  },
  create: (req, res) => {
    Application.create(req.body)
      .then(application => {
        res.json(application)
      })
  },
  updateByCompany: (req, res) => {
    Application.findOneAndUpdate({ company: req.params.company }, req.body, { new: true })
      .then(application => {
        res.json(application)
      })
  },
  updateById: (req, res) => {
    Application.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
      .then(application => {
        res.json(application)
      })
  },
    deleteByCompany: (req, res) => {
    Application.findOneAndDelete({company: req.params.company})
      .then(application => {
        res.json(application)
      }) 
    },
    deleteById: (req, res) => {
    Application.findOneAndDelete({_id: req.params._id})
      .then(application => {
        res.json(application)
      }) 
    }
  }