const GroupChat     = require('../models/GroupChat')
const mysql         = require('mysql')

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "5gws274aws",
    database: "ams_database"
})

function getUserName(user_id, callback){
    const query='select tenant_name from tenant where user_id=?'
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

const getMessage = (req,res,next)=>{
    const block_no = req.query.block_no
    GroupChat.find({block_no : block_no})
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

const addMessage = (req, res, next) => {
    const block_no = req.body.block_no;
    const user_id = req.body.user_id;
    const message = req.body.message;
    const sender = req.body.sender;

    getUserName(user_id, (error, user_name) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Failed to fetch user name' });
            return;
        }

        const message_info = {
            user_id: user_id,
            name: user_name,
            message: message,
            sender: sender
        };

        // Find or create the GroupChat document with the given block_no
        GroupChat.findOneAndUpdate(
            { block_no: block_no },
            { $setOnInsert: { block_no: block_no, messages: [] } }, // Ensure creation if not found
            { upsert: true, new: true } // Create if not found, return the new document
        )
        .then(groupChat => {
            // Append the new message_info to the messages array
            groupChat.messages.push(message_info);

            // Save the updated GroupChat document
            return groupChat.save();
        })
        .then(updatedGroupChat => {
            res.status(200).json({ message: 'Message added successfully' });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).json({ error: 'Failed to add message to group chat' });
        });
    });
};



module.exports = {
    getMessage, addMessage
}