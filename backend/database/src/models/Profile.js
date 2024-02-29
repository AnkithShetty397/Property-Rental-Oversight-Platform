const mongoose      = require('mongoose')
const Schema        = mongoose.Schema

const profileSchema = new Schema({
    user_id:{
        type: String
    },
    pathtoimage:{
        type: String
    }
})

const profileModel = mongoose.model('profileModel',profileSchema)
module.exports = profileModel