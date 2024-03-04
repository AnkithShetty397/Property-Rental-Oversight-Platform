const Profile       = require('../models/Profile')
const fs            = require('fs')
const path          = require('path')

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

const getProfilePicture = (req, res, next) => {
    const userid = req.query.user_id // Extract user_id from query parameters

    if (!userid) {
        return res.status(400).json({ success: false, message: 'User ID is required' })
    }

    Profile.findOne({ user_id: userid })
        .then(profile => {
            if (!profile) {
                return res.status(404).json({ success: false, message: 'Profile not found' })
            }

            const imagePath = profile.pathtoimage

            if (!imagePath) {
                return res.status(404).json({ success: false, message: 'Image path not found' })
            }

            fs.readFile(imagePath, (err, data) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ success: false, message: 'Error reading image' })
                }

                const contentType = path.extname(imagePath) === '.png' ? 'image/png' : 'image/jpeg'

                res.setHeader('Content-Type', contentType);
                res.send(data);
            })
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ success: false, message: 'Error finding profile' })
        })
};


module.exports = {
    saveProfilePicture, deleteProfilePicture, getProfilePicture
}
