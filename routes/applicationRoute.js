const express = require('express')
const router = express.Router()

const applicationController = require('../controllers/applicationController')

router.get('/', applicationController.index)
router.get('/id/:_id', applicationController.findById)
router.get('/company/:company', applicationController.findByCompany)
router.post('/', applicationController.create)
router.put('/company/:company', applicationController.updateByCompany)
router.put('/id/:_id', applicationController.updateById)
router.delete('/company/:company', applicationController.deleteByCompany)
router.delete('/id/:_id', applicationController.deleteById)

module.exports = router
