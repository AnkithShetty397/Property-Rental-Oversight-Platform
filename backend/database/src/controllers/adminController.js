const mysql = require('mysql2');

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

const createEmployeeAccount = (req, res, next) => {
    const name = req.body.employee_name;
    const age = req.body.employee_age;
    const gender = req.body.gender;
    const salary = req.body.employee_salary;
    const hire_date = req.body.hire_date;
    const DoB = req.body.DoB;
    const phone_no = req.body.phone_no;
    const email = req.body.email;
    const password = req.body.password;
    const type = "employee";

    generate_UserID((err, user_id) => {
        if (err) {
            console.error('Error generating user_id:', err);
            return res.status(500).json({ error: 'Error generating user_id' });
        }

        const employee_id = user_id;

        const query1 = 'INSERT INTO account_details VALUES (?, ?, ?, ?)';
        const query2 = 'INSERT INTO employee VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

        connection.beginTransaction(function (err) {
            if (err) {
                throw err;
            }
            connection.query(query1, [user_id, password, email, type], function (error, results1, fields) {
                if (error) {
                    return connection.rollback(function () {
                        throw error;
                    });
                }
                connection.query(query2, [employee_id, name, age, gender, salary, hire_date, DoB, phone_no, user_id], function (error, results2, fields) {
                    if (error) {
                        return connection.rollback(function () {
                            throw error;
                        });
                    }
                    connection.commit(function (err) {
                        if (err) {
                            return connection.rollback(function () {
                                throw err;
                            });
                        }
                        console.log('Transaction Complete.');
                        res.status(200).json({ message: 'Employee account created successfully' });
                    });
                });
            });
        });
    });
};

const removeEmployee = (req, res, next) => {
    const user_id = req.query.user_id;

    if (!user_id) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    const deleteEmployeeQuery = 'DELETE FROM employee WHERE user_id = ?';
    const deleteUserQuery = 'DELETE FROM account_details WHERE user_id = ?';

    connection.beginTransaction(function (err) {
        if (err) {
            throw err;
        }
        connection.query(deleteEmployeeQuery, [user_id], function (error, results1, fields) {
            if (error) {
                return connection.rollback(function () {
                    throw error;
                });
            }
            connection.query(deleteUserQuery, [user_id], function (error, results2, fields) {
                if (error) {
                    return connection.rollback(function () {
                        throw error;
                    });
                }
                connection.commit(function (err) {
                    if (err) {
                        return connection.rollback(function () {
                            throw err;
                        });
                    }
                    console.log('Employee removed successfully.');
                    res.status(200).json({ message: 'Employee removed successfully' });
                });
            });
        });
    });
};

const createOwnerAccount = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    generate_UserID((err, user_id) => {
        if (err) {
            console.error('Error generating user_id:', err);
            return res.status(500).json({ error: 'Error generating user_id' });
        }

        const type = "owner";
        const adhar_id = req.body.adhar_id;
        const phone_no = req.body.phone_no;
        const location = req.body.location;
        const owner_name = req.body.owner_name;
        const owner_age = req.body.owner_age;

        connection.beginTransaction(function (err) {
            if (err) {
                throw err;
            }
            const insertAccountQuery = 'INSERT INTO account_details (user_id, password, email, type) VALUES (?, ?, ?, ?)';
            const insertIdentityQuery = 'INSERT INTO identity (adhar_id, phone_no, location) VALUES (?, ?, ?)';
            const insertOwnerQuery = 'INSERT INTO owner (owner_id, owner_name, owner_age, adhar_no, user_id) VALUES (?, ?, ?, ?, ?)';

            connection.query(insertAccountQuery, [user_id, password, email, type], function (error, results1, fields) {
                if (error) {
                    return connection.rollback(function () {
                        throw error;
                    });
                }
                connection.query(insertIdentityQuery, [adhar_id, phone_no, location], function (error, results2, fields) {
                    if (error) {
                        return connection.rollback(function () {
                            throw error;
                        });
                    }
                    connection.query(insertOwnerQuery, [user_id, owner_name, owner_age, adhar_id, user_id], function (error, results3, fields) {
                        if (error) {
                            return connection.rollback(function () {
                                throw error;
                            });
                        }
                        connection.commit(function (err) {
                            if (err) {
                                return connection.rollback(function () {
                                    throw err;
                                });
                            }
                            console.log('Transaction Complete.');
                            res.status(200).json({ message: 'Owner account created successfully' });
                        });
                    });
                });
            });
        });
    });
};

const addHouseOwner = (req, res, next) => {
    const house_no = req.body.house_no;
    const email = req.body.email;

    const getUserIdQuery = 'SELECT user_id FROM account_details WHERE email = ?';

    connection.query(getUserIdQuery, [email], function(error, results, fields) {
        if (error) {
            console.error('Error retrieving user_id:', error);
            return res.status(500).json({ error: 'Error retrieving user_id' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'User with provided email not found' });
        }

        const user_id = results[0].user_id;

        const updateHouseOwnerQuery = 'UPDATE house SET owner_id = ? WHERE house_no = ?';

        connection.query(updateHouseOwnerQuery, [user_id, house_no], function(error, results, fields) {
            if (error) {
                console.error('Error updating house owner:', error);
                return res.status(500).json({ error: 'Error updating house owner' });
            }

            console.log('House owner updated successfully.');
            res.status(200).json({ message: 'House owner updated successfully' });
        });
    });
};

module.exports = {
    createEmployeeAccount,
    removeEmployee,
    createOwnerAccount,
    addHouseOwner
};
