const express       =require('express')
const router        =express.Router()

const reviewController = require("../controllers/reviewController")

router.post('/getHouseReview',reviewController.getReviews_houseno)
router.post('/getUserReview',reviewController.getReviews_userid)
router.put('/addReview',reviewController.addReview)
router.delete('/deleteReview',reviewController.deleteReview)
router.post('/editReview',reviewController.editReview)

module.exports = router