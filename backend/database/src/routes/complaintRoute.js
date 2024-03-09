const express       =require('express')
const router        =express.Router()

const complaintController = require('../controllers/complaintController')

router.get('/getComplaints',complaintController.getComplaints)
router.post('/addComplaint',complaintController.addComplaint)

module.exports = router