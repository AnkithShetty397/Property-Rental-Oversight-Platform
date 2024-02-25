//import the model
const Review        =require('../models/Review')

//show all the reviews of a house
const getReviews_houseno = (req, res, next)=>{
    const houseNo  =req.body.house_no
    Review.find({house_no : houseNo})
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message : "Error occurred while fetching reviews."
        })
    })
}

//show all the reviews of a user
const getReviews_userid = (req, res, next)=>{
    const User_ID  =req.body.user_id
    Review.find({user_id : User_ID})
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message : "Error occurred while fetching reviews."
        })
    })
}

//add review
const addReview = (req,res, next)=>{
    let newReview=new Review({
        user_id: req.body.user_id,
        user_name: req.body.user_name,
        house_no: req.body.house_no,
        comment: req.body.comment,
        rating: req.body.rating
    })
    newReview.save()
    .then(response=>{
        res.json({
            message: "Review added successfully"
        })
    })
    .catch(error=>{
        res.json({
            message: "Error occured while adding review"
        })
    })
}

//delete review
const deleteReview = (req,res,next)=>{
    const user_id=req.body.user_id
    const house_no=req.body.house_no
    Review.findOneAndDelete({ user_id: user_id, house_no: house_no })
    .then(deletedReview => {
        if (deletedReview) {
            res.json({
                success: true,
                message: "Review deleted successfully"
            })
        } else {
            res.status(404).json({
                success: false,
                message: "Review not found"
            })
        }
    })
    .catch(error => {
        res.status(500).json({
            success: false,
            message: "Error occurred while deleting review"
        })
    })
}

//edit review
const editReview = (req, res, next) => {
    const filter = {
        user_id: req.body.user_id,
        house_no: req.body.house_no
    }
    const update = {
        comment: req.body.comment,
        rating: req.body.rating
    }

    Review.findOneAndUpdate(filter, update, { new: true })
    .then(updatedReview => {
        if (updatedReview) {
            res.json({
                message: "Review updated successfully",
                updatedReview: updatedReview
            })
        } else {
            res.json({
                message: "Review not found"
            })
        }
    })
    .catch(error => {
        res.json({
            message: "Error occurred while updating review"
        })
    })
}

module.exports  = {
    getReviews_houseno, getReviews_userid, addReview, deleteReview, editReview
}
