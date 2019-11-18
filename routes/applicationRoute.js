const express = require('express')
const router = express.Router()

const trackerController = require('../controllers/applicationController')

router.get('/application', applicationController.index)
router.get('/applicaiton/id/:_id', applicationController.findById)
router.get('/applicaiton/company/:company', applicationController.findByCompany)
router.post('/application/', applicationContoller.create)
router.put('/application/company/:company', applicationController.updateById)
router.put('/application/id/:_id', applicationController.update)

module.exports = router
