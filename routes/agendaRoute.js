const express = require('express')
const router = express.Router()

const agendaController = require('../controllers/agendaController')

router.get('/agenda', agendaController.index)
router.get('/agenda/id/:_id', agendaController.findById)
router.post('/agenda/', agendaController.create)
router.put('/agenda/id/:_id', agendaController.updateById)
router.delete('/id/:_id', agendaController.deleteById)

module.exports = router
