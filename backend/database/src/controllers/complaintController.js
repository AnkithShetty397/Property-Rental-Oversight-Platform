const Complaints    = require('../models/Complaints')
const mysql         = require('mysql2')

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "password",
    database: "ams_database"
})

function getUserName(user_id, callback){
    const query='SELECT tenant_name FROM tenant WHERE user_id=?'
    connection.query(query, [user_id], (error, results, fields) => {
        if (error) {
          callback(error, null);
          return
        }
        if (results.length === 0) {
          callback('User not found', null)
          return
        }
        const tenant_name = results[0].tenant_name
        callback(null, tenant_name);
      })
}

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

const addComplaint = (req, res, next) => {
    const block_no = req.body.block_no;
    const user_id = req.body.user_id;
    const message = req.body.complaint;
    const desc = req.body.desc;

    getUserName(user_id, (error, user_name) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Failed to fetch user name' });
            return;
        }

        const message_info = {
            user_id: user_id,
            name: user_name,
            complaint: message,
            desc: desc
        }

        Complaints.findOneAndUpdate(
            { block_no: block_no },
            { $setOnInsert: { block_no: block_no, complaints: [] } },
            { upsert: true, new: true } 
        )
        .then(complaint => {
            complaint.complaints.push(message_info)
            return complaint.save()
        })
        .then(updatedcomplaint => {
            res.status(200).json({ message: 'Complaint added successfully' })
        })
        .catch(error => {
            console.error('Error:', error)
            res.status(500).json({ error: 'Failed to add message to group chat' })
        })
    })
}

module.exports = {
    getComplaints, addComplaint
}