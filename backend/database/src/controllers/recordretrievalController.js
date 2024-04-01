const mysql = require("mysql2");
const axios = require('axios');

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
      query = "SELECT * FROM rental_records ORDER BY start_date DESC";
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
}

const addRentalRecord = (req, res, next) => {
  let { user_id, start_date, end_date, tenant_id, house_no, rent_per_month } = req.body;
  let payment_status = "no due";

  const fetchTenantIdQuery = "SELECT tenant_id FROM tenant WHERE user_id = ?";
  const fetchOwnerQuery = "SELECT o.owner_id, i.phone_no, a.email FROM ((owner o JOIN identity i ON o.adhar_no=i.adhar_id) JOIN account_details a ON o.user_id=a.user_id) join house h on h.owner_id=o.owner_id WHERE h.house_no=?";
  const fetchTenantUsernameQuery = "SELECT tenant_name FROM tenant WHERE user_id = ?";

  connection.query(fetchTenantIdQuery, [user_id], (error, tenantResults, fields) => {
    if (error) {
      console.error("Error fetching tenant_id:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (tenantResults.length === 0) {
      return res.status(404).json({ error: "Tenant not found for the provided user_id" });
    }

    tenant_id = tenantResults[0].tenant_id;

    rentalNumberGenerator((error, rentalNo) => {
      if (error) {
        console.error("Error generating rental number:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      const rentAmount = calculateRentAmount(start_date, end_date, rent_per_month);

      const insertQuery = "INSERT INTO rental_records (rental_no, start_date, end_date, tenant_id, house_no, rent_amount, payment_status) VALUES (?, ?, ?, ?, ?, ?, ?)";

      connection.query(insertQuery, [rentalNo, start_date, end_date, tenant_id, house_no, rentAmount, payment_status], (error, rentalResults, fields) => {
        if (error) {
          console.error("Error inserting data:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        connection.query(fetchOwnerQuery, [house_no], (error, ownerResults, fields) => {
          if (error) {
            console.error("Error fetching owner's user_id:", error);
            return res.status(500).json({ error: "Internal Server Error" });
          }

          if (ownerResults.length === 0) {
            console.error("Owner not found for the provided house_no");
            return res.status(404).json({ error: "Owner not found for the provided house_no" });
          }

          const owner_id = ownerResults[0].owner_id;
          const phone_no = ownerResults[0].email;
          const email = ownerResults[0].phone_no;

          connection.query(fetchTenantUsernameQuery, [user_id], (error, tenantUsernameResults, fields) => {
            if (error) {
              console.error("Error fetching tenant's username:", error);
              return res.status(500).json({ error: "Internal Server Error" });
            }

            const tenant_username = tenantUsernameResults[0].tenant_name;

            const tenantNotificationMessage = `Dear ${tenant_username},\n\nYou have successfully rented the house (House No: ${house_no}) from ${start_date} to ${end_date} | \n\nRent Amount: ${rentAmount} | \n\nFor any queries, please contact the owner:\nEmail: ${email}\nPhone Number: ${phone_no}`;

            axios.post('http://localhost:3000/api/sendNotification', {
              to: user_id,
              sender: "System",
              content: tenantNotificationMessage
            })
            .then(() => {
              const ownerNotificationMessage = `Dear Owner,\n\nTenant ${tenant_username} (tenant_id: ${tenant_id}) has rented your house (House No: ${house_no}) from ${start_date} to ${end_date}.\n\nRent Amount: ${rentAmount}`;

              axios.post('http://localhost:3000/api/sendNotification', {
                to: owner_id,
                sender: "System",
                content: ownerNotificationMessage
              })
              .then(() => {
                return res.status(200).json({ message: "Data inserted successfully and notifications sent to the tenant and the owner" });
              })
              .catch(error => {
                console.error("Error sending notification to the owner:", error);
                return res.status(500).json({ error: "Internal Server Error" });
              });
            })
            .catch(error => {
              console.error("Error sending notification to the tenant:", error);
              return res.status(500).json({ error: "Internal Server Error" });
            });
          });
        });
      });
    });
  });
};

module.exports = {
  retrieveRentalRecords,
  addRentalRecord
};
