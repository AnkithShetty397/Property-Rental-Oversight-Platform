const mysql = require("mysql2");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

// importing routes
const reviewRoute = require("./database/src/routes/reviewRoute");
const houseRoute = require("./database/src/routes/houseRoute");
const searchRoute = require("./database/src/routes/searchRoute");
const profileRoute = require("./database/src/routes/profileRoute");
const userdetailsRoute = require("./database/src/routes/userdetailsRoute");
const groupchatRoute = require("./database/src/routes/groupchatRoute");
const loginRoute = require("./database/src/routes/loginRoute");
const createaccountRoute = require("./database/src/routes/createaccountRoute");
const recordretrievalRoute = require("./database/src/routes/recordretrievalRoute");
const complaintRoute = require("./database/src/routes/complaintRoute");

// connecting nodejs to mysql
const mysqldb = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ams_database",
});

mysqldb.connect(function (err) {
  if (err) throw err;
  console.log("MySQL database connection established!");
});

// connecting nodejs application to mongodb database using mongoose
mongoose.connect("mongodb://localhost:27017/nosqldb", {}); // default port //nosqldb is the name of mongodb
//mongoose.connect("mongodb+srv://rohithreddyrr4:@cluster0.sz36yag.mongodb.net/",{}); // default port //nosqldb is the name of mongodb
const db = mongoose.connection;

// logging
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("MongoDB connection established!");
});

const app = express(); // Initializing the express application

app.use(cors({ origin: "http://localhost:5173" })); // Enable CORS

app.use(morgan("dev")); // Morgan middleware is used for logging HTTP requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000; // server port number

app.listen(PORT, () => {
  // start listening to the server port
  console.log(`Server is running on port ${PORT}`);
});

// mounting middleware function
app.use("/api/review", reviewRoute);
app.use("/api/house", houseRoute);
app.use("/api/search", searchRoute);
app.use("/api/profile", profileRoute);
app.use("/api/user", userdetailsRoute);
app.use("/api/groupchat", groupchatRoute);
app.use("/api", loginRoute);
app.use("/api", createaccountRoute);
app.use("/api/employee", recordretrievalRoute);
app.use("/api/complaints", complaintRoute);
