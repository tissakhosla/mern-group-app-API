const express = require('express')
const router = express()
router.use('/tracker', require('./trackerroute'))

module.exports = router
