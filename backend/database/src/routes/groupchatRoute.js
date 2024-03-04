const express       =require('express')
const router        =express.Router()

const groupchatController = require('../controllers/groupchatController')

router.get('/getMessage',groupchatController.getMessage)
router.post('/addMessage',groupchatController.addMessage)

module.exports = router