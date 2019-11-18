const express = require('express')
const router = express.Router()

const agendaController = require('../controllers/agendaController')

router.get('/', agendaController.index)
router.get('/id/:_id', agendaController.findById)
router.post('/', agendaController.create)
router.put('/id/:_id', agendaController.updateById)
router.delete('/id/:_id', agendaController.deleteById)

module.exports = router
