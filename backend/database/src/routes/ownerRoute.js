const express   = require('express')
const router    = express.Router()

const ownerController = require("../controllers/ownerController")

router.post("/setrent",ownerController.setRent)
router.get("/fetchrentalrecords",ownerController.fetchRentalRecords)

module.exports = router