const express   = require('express')
const router    = express.Router()

const recordretrievalController = require('../controllers/recordretrievalController')

router.post('/retrieveRentalRecords',recordretrievalController.retrieveRentalRecords)
router.post('/addRentalRecord',recordretrievalController.addRentalRecord)

module.exports = router