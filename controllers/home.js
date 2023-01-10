const DeviceDetails = require('../models/deviceDetails');
const DeviceGroup = require('../models/deviceGroups');

module.exports = {

    // CONTROLLERS TO ADD & UPDATE DEVICES

    getDevicesPage: async (req,res) => {
        try {

            const devices = await DeviceDetails.find(req.params.id);
            res.render("getDevicesPage.ejs", {devices: devices})
            console.log("devices route working")
        } catch (err) {
            console.log(err)
        }
    },

    getActiveDevicesPage: async (req,res) => {
        try {
            const devices = await DeviceDetails.find(req.params.id);
            res.render("getActiveDevicesPage.ejs", {devices: devices})
            console.log("devices route working")
        } catch (err) {
            console.log(err)
        }
    },

    createNewDevice: async (req, res) => {
        try {
           const devices = await DeviceDetails.create({
                serialNumber: req.body.serialNumber,

            });
            console.log("added successfully")
            res.render("addGroupPage.ejs", {devices: devices});
        } catch (err) {
            if (err) return res.status(500).send(err);
            res.redirect("/");
        }
    },

    // CONTROLLERS TO ADD & UPDATE DEVICE GROUPS

    getGroupForm: async (req, res) => {
        try {
          const devices = await DeviceDetails.findById(req.params.id)
          res.render("addGroupsForm.ejs", {devices: devices});
        } catch (err) {
          console.log(err);
        }
      },

    getGroupsPage: async (req,res) => {
        try {
            res.render("getGroupsPage.ejs")
            console.log("groups route working")
        } catch (err) {
            console.log(err)
        }
    },

    createNewGroup: async (req, res) => {
        try {
            await DeviceGroup.create({
                groupName: req.body.groupName,
                device: req.params.id
            });
            console.log("Groups added")
            res.redirect(302, "/");
        } catch (err) {
            console.log(err)
        }
    },

    // CONTROLLERS TO ADD & UPDATE DEVICE SETTINGS

    getSettingsPage: async (req,res) => {
        try {
            res.render("getSettingsPage.ejs")
            console.log("settings route working")
        } catch (err) {
            console.log(err)
        }
    },
    
    getMain : async (req, res) => {
        try {
            // const details = await
            // DeviceDetails.find()
            // res.render("index.ejs", { deviceList: details });
            res.render("index.ejs",)
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },
    
      
}