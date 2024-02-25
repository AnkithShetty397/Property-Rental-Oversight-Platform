const mongoose      = require('mongoose')
const Schema        = mongoose.Schema

const houseSchema = new Schema({
    house_no :{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    key_features:{
        type: [String]
    }
})

const houseModel = mongoose.model('houseModel',houseSchema)
module.exports = houseModel