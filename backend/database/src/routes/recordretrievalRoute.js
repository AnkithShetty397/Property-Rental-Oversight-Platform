const express   = require('express')
const router    = express.Router()

const recordretrievalController = require('../controllers/recordretrievalController')

router.get('/retrieveRentalRecords',recordretrievalController.retrieveRentalRecords)
router.post('/addRentalRecord',recordretrievalController.addRentalRecord)

module.exports = router