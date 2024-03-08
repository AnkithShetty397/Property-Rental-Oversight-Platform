const mysql         = require('mysql')

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "5gws274aws",
    database: "ams_database"
})


const retrieveRentalRecords = (req, res, next) => {
    const type = req.body.type
    const data = req.body.data
    let query

    switch (type) {
        case "all":
            query = 'SELECT * FROM rental_records'
            break
        case "payment_status":
            query = "SELECT * FROM rental_records WHERE payment_status=?"
            break
        case "tenant_id":
            query = "SELECT * FROM rental_records WHERE tenant_id=?"
            break
        case "before":
            query = "SELECT * FROM rental_records WHERE end_date<=?"
            break
        case "after":
            query = "SELECT * FROM rental_records WHERE end_date>=?"
            break
        default:
            return res.status(400).json({ error: "Invalid type specified" })
    }

    connection.query(query, data ? [data] : [], (error, results, fields) => {
        if (error) {
            return res.status(500).json({ error: "Internal server error" })
        }
        if (results.length === 0) {
            return res.status(404).json({ error: "No record found" })
        }
        return res.status(200).json(results)
    })
}

module.exports = {
    retrieveRentalRecords
}