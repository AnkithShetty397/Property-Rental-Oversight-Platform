const mysql = require('mysql2')
const Complaints = require('../models/Complaints')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ams_database"
});

const getComplaints = (req,res,next)=>{
    const block_no = req.query.block_no
    Complaints.find({block_no : block_no})
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message: "Error occured while fetching messages."
        })
    })
}

module.exports = {
    getComplaints
}