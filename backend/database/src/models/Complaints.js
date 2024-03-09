const mongoose      = require('mongoose')
const Schema        = mongoose.Schema

const complaintSchema = new Schema({
    user_id: String,
    name: String,
    complaint: String,
    desc: String
})

const complaintsSchema = new Schema({
    block_no: String,
    complaints: [complaintSchema]
})

const Complaints = mongoose.model('Complaints', complaintsSchema)

module.exports = Complaints
