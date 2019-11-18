const express = require('express')
const router = express.Router()

const trackerController = require('../controllers/tracker')

router.get('/', trackerController.index)
router.put('/id/:_id', trackerController.update)
// router.get('/bachelor/year/:year', bachelorController.showYear)
// router.get('/bachelor/name/:name', bachelorController.showName)
// router.post('/bachelor', bachelorController.create)
// router.put('/bachelor/name/:name', bachelorController.edit)
// router.delete('/bachelor/name/:name', bachelorController.delete)

module.exports = router
