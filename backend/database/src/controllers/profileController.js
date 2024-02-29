const Profile       = require('../models/Profile')
const fs            = require('fs')

const saveProfilePicture = (req,res,next)=>{
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    let profile=new Profile({
        user_id: req.body.user_id,
        pathtoimage: req.file.path
    })
    profile.save()
    .then(response=>{
        res.json({
            message: "profile picture added successfully"
        })
    })
    .catch(error=>{
        res.json({
            message: "Error occured while adding profile picture"
        })
    })
}

const deleteProfilePicture = (req,res,next)=>{
    let userid = req.body.user_id
    Profile.findOneAndDelete({ user_id: userid })
    .then(deletedImage => {
        if (deletedImage) {
            fs.unlink(deletedImage.pathtoimage, (err) => {
                if (err) {
                    console.error("Error deleting file:", err)
                    return res.status(500).json({
                        success: false,
                        message: "Error occurred while deleting image file"
                    })
                }
                res.json({
                    success: true,
                    message: "Image deleted successfully"
                })
            })
        } else {
            res.status(404).json({
                success: false,
                message: "Image not found"
            })
        }
    })
    .catch(error => {
        res.status(500).json({
            success: false,
            message: "Error occurred while deleting image"
        })
    })
}

module.exports = {
    saveProfilePicture, deleteProfilePicture
}
