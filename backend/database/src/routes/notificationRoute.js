const express       = require('express')
const router        = express.Router()

const notifications = require('../controllers/notificationController')

router.get('/notifications',notifications.getNotification)
router.post('/sendNotification',notifications.sendNotification)

module.exports = router