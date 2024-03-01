const express       = require('express')
const router        = express.Router()

const userdetailsController = require('../controllers/userdetailsController')

router.get('/getUserDetails',userdetailsController.getUserDetails)

module.exports = router