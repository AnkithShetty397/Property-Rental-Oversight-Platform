const mongoose          = require('mongoose')
const Schema            = mongoose.Schema

const reviewSchema       = new Schema({
    user_id :{
        type: String
    },
    user_name:{
        type: String
    },
    house_no:{
        type: Number
    },
    comment:{
        type: String
    },
    rating:{
        type: Number,
        min: 0,
        max: 5
    }
}, {timestamps: true})

const reviewModel   = mongoose.model('reviewModel',reviewSchema)
module.exports      = reviewModel