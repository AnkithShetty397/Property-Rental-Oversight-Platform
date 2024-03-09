const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ams_database"
});

function generate_UserID(callback) {
    const query = 'SELECT MAX(CONVERT(user_id, SIGNED)) AS max_id FROM account_details';

    connection.query(query, (error, results, fields) => {
        if (error) {
            callback(error, null);
            return;
        }

        let new_id = results[0].max_id + 1 || 1;
        let new_id_str = new_id.toString();

        callback(null, new_id_str);
    });
}


function generate_TenantID(callback) {
    const query = 'SELECT MAX(SUBSTRING_INDEX(tenant_id, "t", -1) + 0) AS max_id FROM tenant'

    connection.query(query, (error, results, fields) => {
        if (error) {
            callback(error, null)
            return
        }

        let new_id = results[0].max_id + 1 || 0
        let new_id_str = 't' + new_id.toString()

        callback(null, new_id_str)
    })
}

const createAccount = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const age = req.body.age
    const phone_no = req.body.phone_no
    const adhar_no = req.body.adhar_no
    const location = req.body.location
    const password = req.body.password
    const type = "user"

    generate_UserID((err, user_id) => {
        if (err) {
            console.error('Error generating user_id:', err);
            return res.status(500).json({ error: 'Error generating user_id' });
        }

        generate_TenantID((err, tenant_id) => {
            if (err) {
                console.error('Error generating tenant_id:', err)
                return res.status(500).json({ error: 'Error generating tenant_id' })
            }

            const query1 = 'INSERT INTO account_details values(?,?,?,?)'
            const query2 = 'INSERT INTO identity values(?,?,?)'
            const query3 = 'INSERT INTO tenant values(?,?,?,null,null,?,?)'

            new Promise((resolve, reject) => {
                    connection.beginTransaction((err) => {
                        if (err) {
                            console.log('Error starting transaction:', err)
                            reject(err)
                            return
                        }
                        resolve()
                    })
                })
                .then(() => {
                    return new Promise((resolve, reject) => {
                        connection.query(query1, [user_id, password, email, type], (error1, result1) => {
                            if (error1) {
                                console.error('Error inserting account_details:', error1)
                                return reject(error1)
                            }
                            resolve()
                        })
                    })
                })
                .then(() => {
                    return new Promise((resolve, reject) => {
                        connection.query(query2, [adhar_no, phone_no, location], (error1, result1) => {
                            if (error1) {
                                console.error('Error inserting identity data:', error1)
                                return reject(error1)
                            }
                            resolve()
                        })
                    })
                })
                .then(() => {
                    return new Promise((resolve, reject) => {
                        connection.query(query3, [tenant_id, name, age, user_id, adhar_no], (error1, result1) => {
                            if (error1) {
                                console.error('Error inserting tenant details', error1)
                                return reject(error1)
                            }
                            resolve()
                        })
                    })
                })
                .then(() => {
                    connection.commit((err) => {
                        if (err) {
                            console.error('Error committing transaction:', err)
                            return connection.rollback(() => {
                                res.status(500).json({ error: 'Error committing transaction' })
                            })
                        }
                        res.status(200).json({ message: 'Data insertion successful' })
                    })
                })
                .catch((error) => {
                    connection.rollback(() => {
                        console.error('Error in transaction:', error)
                        res.status(500).json({ error: 'Error in transaction' })
                    })
                })
        })
    })
}

module.exports = {
    createAccount
}
