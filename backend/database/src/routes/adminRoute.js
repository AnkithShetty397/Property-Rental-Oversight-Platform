const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

router.post("/createemployee", adminController.createEmployeeAccount);
router.delete("/removeemployee", adminController.removeEmployee);
router.post("/createowner", adminController.createOwnerAccount);
router.post("/addhouseowner", adminController.addHouseOwner);

module.exports = router;
