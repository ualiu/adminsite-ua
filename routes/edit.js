//This route will handle editing and deleting items, as well as rendering the edit page itself

const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getDeviceEdit)
router.post('/update/:id', editController.updateDevice)

module.exports = router