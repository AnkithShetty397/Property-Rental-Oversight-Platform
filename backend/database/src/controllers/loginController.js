const axios         = require('axios')
const pool          = require('../../../server')
const mysql         = require('mysql')

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "5gws274aws",
    database: "ams_database"
})

const login = (req, res, next) => {
    const email = req.body.email;
    const passwordFromBody = req.body.password;
    const query = 'SELECT password, user_id FROM account_details WHERE email = ?'

    connection.query(query, [email], (error, results, fields) => {
        if (error) {
            return res.status(500).json({ error: "Internal Server Error" })
        }

        if (results.length === 0) {
            return res.status(404).json({ error: "Account not found" })
        }

        const passwordFromDB = results[0].password
        const user_id = results[0].user_id
        if (passwordFromDB === passwordFromBody) {
            return res.status(200).json({ message: "Login successful" , user_id: user_id })
        } else {
            return res.status(401).json({ error: "Incorrect password" })
        }
    });
};

module.exports = {
    login
}