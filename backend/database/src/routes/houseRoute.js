const express       =require('express')
const router        =express.Router()

const houseController = require('../controllers/houseController')

router.post('/getHouseFeatureandDesc',houseController.getFeaturesandDesc)
router.post('/getHouseDesc',houseController.getDescription)
router.post('/getFeatures',houseController.getFeatures)
router.post('/getHouseList',houseController.getHouseList)

module.exports = router