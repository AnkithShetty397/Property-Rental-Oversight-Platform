const mongoose      = require('mongoose')
const Schema        = mongoose.Schema

const messageSchema = new Schema({
    user_id: String,
    name: String,
    message: String,
    sender: String
})

const groupChatSchema = new Schema({
    block_no: String,
    messages: [messageSchema]
})

const GroupChat = mongoose.model('GroupChat', groupChatSchema)

module.exports = GroupChat
