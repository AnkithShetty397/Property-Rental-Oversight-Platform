const axios = require("axios");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ams_database",
});

const getUserName= (req, res, next) => {
  const user_id = req.query.user_id;
  const query = "select t.tenant_name from tenant t join account_details a on t.user_id=a.user_id where a.user_id=?"
  connection.query(query, [user_id], (error, results, fields) => {
    if (error) {
      console.error("Error fetching data: ", error);
      res.status(500).json({ error: "Error fetching data" });
      return;
    }
    res.status(200).json(results);
  });
};

const getUserDetails = (req, res, next) => {
  const user_id = req.query.user_id;
  const query =
    "select t.tenant_name as name,t.tenant_age as age,i.adhar_id as adhar_no,i.location as location,i.phone_no as phone_no,u.email as email from identity as i join (tenant as t join account_details as u on t.user_id=u.user_id) on i.adhar_id=t.adhar_no where u.user_id=?";
  connection.query(query, [user_id], (error, results, fields) => {
    if (error) {
      console.error("Error fetching data: ", error);
      res.status(500).json({ error: "Error fetching data" });
      return;
    }
    res.status(200).json(results);
  });
};

const updateUserDetails = (req, res, next) => {
  const user_id = req.body.user_id;
  const name = req.body.name;
  const age = req.body.age;
  const location = req.body.location;
  const adhar_no = req.body.adhar_no;
  const phone_no = req.body.phone_no;

  const query1 =
    "UPDATE tenant SET tenant_name=?, tenant_age=? WHERE user_id=?";
  const query2 = "UPDATE identity SET phone_no=?, location=? WHERE adhar_id=?";

  new Promise((resolve, reject) => {
    connection.beginTransaction((err) => {
      if (err) {
        console.error("Error starting transaction:", err);
        reject(err);
        return;
      }
      resolve();
    });
  })
    .then(() => {
      return new Promise((resolve, reject) => {
        connection.query(query1, [name, age, user_id], (error1, results1) => {
          if (error1) {
            console.error("Error updating tenant:", error1);
            return reject(error1);
          }
          resolve();
        });
      });
    })
    .then(() => {
      return new Promise((resolve, reject) => {
        connection.query(
          query2,
          [phone_no, location, adhar_no],
          (error2, results2) => {
            if (error2) {
              console.error("Error updating identity:", error2);
              return reject(error2);
            }
            resolve();
          }
        );
      });
    })
    .then(() => {
      connection.commit((err) => {
        if (err) {
          console.error("Error committing transaction:", err);
          return connection.rollback(() => {
            res.status(500).json({ error: "Error committing transaction" });
          });
        }
        res.status(200).json({ message: "Update successful" });
      });
    })
    .catch((error) => {
      connection.rollback(() => {
        console.error("Error in transaction:", error);
        res.status(500).json({ error: "Error in transaction" });
      });
    });
};

module.exports = {
  getUserDetails,
  updateUserDetails,
  getUserName
};
