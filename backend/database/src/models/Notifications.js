const mongoose      = require('mongoose')
const Schema        = mongoose.Schema

const notificationSchema = new Schema({
    sender: String,
    content: String
})

const notificationsSchema = new Schema({
    user_id: String,
    notification: [notificationSchema]
})

const Notifications = mongoose.model('Notifications', notificationsSchema)

module.exports = Notifications