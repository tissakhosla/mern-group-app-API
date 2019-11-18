const express = require('express')
const router = express()

router.use('/tracker', require('./trackerRoute'))

module.exports = router
