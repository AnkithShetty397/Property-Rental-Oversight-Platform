const express       = require('express')
const router        = express.Router()

const profileController     = require('../controllers/profileController')
const handlingImageFiles    = require('../middleware/handlingImageFiles') 

router.post('/saveProfilePicture',handlingImageFiles.saveProfilePicture.single('profilephoto'),profileController.saveProfilePicture)
router.post('/deleteProfilePicture',profileController.deleteProfilePicture)
router.post('/getProfilePicture',profileController.getProfilePicture)

module.exports = router