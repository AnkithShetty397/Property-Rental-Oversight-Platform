//importing house model
const House     = require('../models/House')

//get features and description of house
const getFeaturesandDesc = (req,res,next)=>{
    const house_no = req.body.house_no
    House.findOne({house_no: house_no})
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message: "Error occured while fetching data!"
        })
    })
}

//get features
const getFeatures = (req,res,next)=>{
    const house_no = req.body.house_no
    House.findOne({house_no:house_no})
    .then(response=>{
        if (response) {
            const features = response.key_features
            res.json({
                features: features
            })
        } else {
            res.status(404).json({
                message: "Empty"
            })
        }
    })
    .catch(error=>{
        res.status(500).json({
            message: "Error occured while fetching data"
        })
    })
}

//get features
const getDescription = (req,res,next)=>{
    const house_no = req.body.house_no
    House.findOne({house_no:house_no})
    .then(response=>{
        if (response) {
            const description = response.description 
            res.json({
                description: description
            })
        } else {
            res.status(404).json({
                message: "Empty"
            })
        }
    })
    .catch(error=>{
        res.status(500).json({
            message: "Error occured while fetching data"
        })
    })
}

module.exports = {
    getFeaturesandDesc, getFeatures, getDescription
}