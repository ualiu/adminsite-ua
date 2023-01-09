//Handles initial GET request for the homepage
//Handles POST method  request for adding a new task

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getMain)
router.post('/createNewDevice', homeController.createNewDevice)

router.get('/devices', homeController.getDevicesPage)
router.get('/activeDevices', homeController.getActiveDevicesPage)
router.get('/groups', homeController.getGroupsPage)
router.get('/settings', homeController.getSettingsPage)


module.exports = router