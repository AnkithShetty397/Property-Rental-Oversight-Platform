const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ams_database",
});

const login = (req, res, next) => {
  const email = req.body.email;
  const type = req.body.type;
  const passwordFromBody = req.body.password;

  let query; 
  if(type === "user") {
    query = "SELECT a.user_id, h.block_no, a.password FROM (tenant AS t JOIN account_details AS a ON t.user_id = a.user_id) JOIN house AS h ON t.house_no = h.house_no WHERE a.email = ? and a.type = ?";
  } else {
    query = "SELECT password, user_id FROM account_details WHERE email = ? and type = ?";
  }

  connection.query(query, [email, type], (error, results, fields) => {
    if (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Account not found" });
    }

    if (type === "user") {
      const passwordFromDB = results[0].password;
      const user_id = results[0].user_id;
      const block_no = results[0].block_no;

      if (passwordFromDB === passwordFromBody) {
        return res.status(200).json({
          message: "Login successful",
          user_id: user_id,
          block_no: block_no
        });
      } else {
        return res.status(401).json({ error: "Incorrect password" });
      }
    } else {
      const passwordFromDB = results[0].password;
      const user_id = results[0].user_id;

      if (passwordFromDB === passwordFromBody) {
        return res.status(200).json({
          message: "Login successful",
          user_id: user_id
        });
      } else {
        return res.status(401).json({ error: "Incorrect password" });
      }
    }
  });
};

module.exports = {
  login,
}
