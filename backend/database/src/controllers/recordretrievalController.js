const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ams_database",
});

const retrieveRentalRecords = (req, res, next) => {
  const type = req.query.type;
  const data = req.query.data;
  let query;

  switch (type) {
    case "all":
      query = "SELECT * FROM rental_records";
      break;
    case "payment_status":
      query = "SELECT * FROM rental_records WHERE payment_status=?";
      break;
    case "tenant_id":
      query = "SELECT * FROM rental_records WHERE tenant_id=?";
      break;
    case "date":
      query = "SELECT * FROM rental_records WHERE end_date=?";
      break;
    default:
      return res.status(400).json({ error: "Invalid type specified" });
  }

  connection.query(query, data ? [data] : [], (error, results, fields) => {
    if (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "No record found" });
    }
    return res.status(200).json(results);
  });
};

const rentalNumberGenerator = (callback) => {
  const query = "SELECT MAX(CAST(rental_no AS UNSIGNED)) AS max_rental_no FROM rental_records";

  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error retrieving max rental_no:", error);
      return callback(error, null);
    }

    const maxRentalNo = results[0].max_rental_no;

    const newRentalNo = maxRentalNo ? String(parseInt(maxRentalNo) + 1) : "1";

    callback(null, newRentalNo);
  });
};

const calculateRentAmount = (startDate, endDate, rentPerMonth) => {
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  const diffInMonths = (endDateObj.getFullYear() - startDateObj.getFullYear()) * 12 + (endDateObj.getMonth() - startDateObj.getMonth());

  const rentAmount = diffInMonths * rentPerMonth;
  return rentAmount || 0; 
};
const addRentalRecord = (req, res, next) => {
  let { start_date, end_date, tenant_id, house_no, rent_per_month, user_id } = req.body;
  let payment_status = "no due";

  const fetchTenantIdQuery = "SELECT tenant_id FROM tenant WHERE user_id = ?";

  connection.query(fetchTenantIdQuery, [user_id], (error, results, fields) => {
    if (error) {
      console.error("Error fetching tenant_id:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Tenant not found for the provided user_id" });
    }

    tenant_id = results[0].tenant_id;

    rentalNumberGenerator((error, rentalNo) => {
      if (error) {
        console.error("Error generating rental number:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      const rentAmount = calculateRentAmount(start_date, end_date, rent_per_month);

      const insertQuery = "INSERT INTO rental_records (rental_no, start_date, end_date, tenant_id, house_no, rent_amount, payment_status) VALUES (?, ?, ?, ?, ?, ?, ?)";

      connection.query(insertQuery, [rentalNo, start_date, end_date, tenant_id, house_no, rentAmount, payment_status], (error, results, fields) => {
        if (error) {
          console.error("Error inserting data:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const updateQuery = "UPDATE tenant SET house_no = ? WHERE user_id = ?";
        connection.query(updateQuery, [house_no, user_id], (error, results, fields) => {
          if (error) {
            console.error("Error updating tenant data:", error);
            return res.status(500).json({ error: "Internal Server Error" });
          }
          
          return res.status(200).json({ message: "Data inserted and tenant record updated successfully" });
        });
      });
    });
  });
};


module.exports = {
  retrieveRentalRecords,
  addRentalRecord
};
