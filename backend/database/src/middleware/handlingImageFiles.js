const path      = require('path')
const multer    = require('multer')

var ProfilePictureStorage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'database/src/uploads/profilepictures')             //location where the file will be stored
    },
    filename: function(req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null,req.body.user_id + ext)                 //renaming the image
    }
})

var ReviewImageStorage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/review_images/')             //location where the file will be stored
    },
    filename: function(req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null,req.body.user_id + ext)                 //renaming the image
    }
})

var saveProfilePicture = multer({
    storage: ProfilePictureStorage,                      //storage location
    fileFilter : function(req,file, callback){          //check for image extension
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ){
            callback(null,true)
        }else{
            console.log('only jpg & png files supported')
            callback(null,false)
        }
    },
    limits:{
        filesize: 1024 * 1024 * 2                       //file size limit
    }
})

var saveReviewImage = multer({
    storage: ReviewImageStorage,                       //storage location
    fileFilter : function(req,file, callback){          //check for image extension
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg"
        ){
            callback(null,true)
        }else{
            console.log('only jpg & png files supported')
            callback(null,false)
        }
    },
    limits:{
        filesize: 1024 * 1024 * 2                       //file size limit
    }
})

module.exports = {
    saveProfilePicture, saveReviewImage
}
