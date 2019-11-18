const Skill= require('../models/Skill')

module.exports = {
  index: (req, res) => {
    Skill.find({})
      .then(skill => {
        res.json(skill)
      })
  },
  findById: function (req, res) { 
    Skill.findById({ _id: req.params._id })
      .then(application => {
        res.json(application)
      })
  },
  findByProficiency: function (req, res) { 
    Skill.find({ proficiency: req.params.proficiency })
      .then(skill => {
        res.json(skill)
      })
  },
  create: (req, res) => {
    Skill.create(req.body)
      .then(skill => {
        res.json(skill)
      })
  },
  updateById: (req, res) => {
    Skill.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
      .then(skill => {
        res.json(skill)
      })
  },
  deleteById: (req, res) => {
    Skill.findOneAndDelete({_id: req.params._id})
      .then(skill => {
        res.json(skill)
      }) 
    }
}