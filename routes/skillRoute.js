const express = require('express')
const router = express.Router()

const skillController = require('../controllers/skillController')

router.get('/', skillController.index)
router.get('/id/:_id', skillController.findById)
router.get('/proficiency/:proficiency', skillController.findByProficiency)
router.post('/', skillController.create)
router.put('/id/:_id', skillController.updateById)
router.delete('/id/:_id', skillController.deleteById)

module.exports = router
