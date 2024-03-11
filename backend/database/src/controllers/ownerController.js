const mysql = require('mysql2')
const Notifications = require('../models/Notifications')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ams_database"
});

const setRent = (req,res,next)=>{
    const rent = req.body.rent
    const house_no = req.body.house_no

    const query = 'UPDATE house SET rent=? WHERE house_no=?'

    connection.query(query,[rent,house_no],(error,results,fields)=>{
        if(error){
            return res.status(500).json({error:"Internal server error"})
        }
        return res.status(200).json({message:"rent successfully updated", response:results})
    })
}

const fetchRentalRecords = (req,res,next)=>{
    const user_id = req.query.user_id

    const query = 'SELECT * FROM rental_records WHERE house_no IN (SELECT house_no FROM house WHERE owner_id=?)'

    connection.query(query, [user_id], (error,results,fields)=>{
        if(error){
            return res.status(500).json({error: "Internal Server Error"})
        }
        return res.status(200).json(results)
    })
}

const getNotifications = (req,res,next)=>{
    const user_id = req.query.user_id

    Notifications.findOne({ user_id })
        .then(notification => {
            if (!notification) {
                return res.status(404).json({ message: "No notifications found for the user" });
            }

            // Mapping over notifications array to extract sender and content for each notification
            const messages = notification.notification.map(item => {
                return { sender: item.sender, content: item.content };
            });

            res.status(200).json({ messages });
        })
        .catch(err => {
            console.error("Error fetching notifications:", err);
            res.status(500).json({ error: "Internal Server Error" });
        });
}

module.exports = {
    setRent, fetchRentalRecords, getNotifications
}