const express       =require('express')
const router        =express.Router()

const searchController = require('../controllers/searchController')

router.get('/searchHouse',searchController.searchHouse)
router.get('/getHouseDetails',searchController.getHouseDetails)

module.exports = router