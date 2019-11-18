const express = require('express')
const router = express()

router.use('/application', require('./applicationRoute'))
router.use('/agenda', require('./agendaRoute'))
// router.use('/skill', require('./skillRoute'))

module.exports = router
