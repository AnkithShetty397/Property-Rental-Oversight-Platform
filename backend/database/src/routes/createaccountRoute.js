const express       = require('express')
const router        = express.Router()

const createaccountController = require('../controllers/createaccountController')

router.post('/createaccount',createaccountController.createAccount)

module.exports = router