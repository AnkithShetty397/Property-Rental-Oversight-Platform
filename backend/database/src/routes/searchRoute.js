const express       =require('express')
const router        =express.Router()

const searchController = require('../controllers/searchController')

router.post('/searchHouse',searchController.searchHouse)
router.post('/getHouseDetails',searchController.getHouseDetails)

module.exports = router