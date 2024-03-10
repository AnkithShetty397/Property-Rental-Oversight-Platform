const axios = require("axios");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ams_database",
});

const searchHouse = (req, res, next) => {
  console.log(req.body);
  const city = req.query.city;

  const query =
    "SELECT h.house_no, h.block_no FROM (house h JOIN block b ON h.block_no=b.block_no) WHERE b.city=? AND h.occupancy_status IS NULL";

  connection.query(query, [city], (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);

      return res.status(500).json({ error: "Error executing query" });
    }

    if (results.length === 0) {
      return res
        .status(404)
        .json({ message: "No houses found for the specified city" });
    }

    res.json(results);
  });
};

const getHouseDetails = (req, res, next) => {
  const house_no = req.body.house_no;

  const query = "SELECT h.house_no, h.house_type, h.house_floor, h.rent, b.city, b.block_name FROM house h JOIN block b ON h.block_no = b.block_no WHERE h.house_no = ?";
  
  connection.query(query, [house_no], (error, results, fields) => {
    if (error) {
      console.error("Error fetching SQL data:", error);
      return res.status(500).json({ error: "Error fetching data from database" });
    }
    res.status(200).json(results); 
  });
};



module.exports = {
  searchHouse,
  getHouseDetails,
};
