const DeviceDetails = require('../models/deviceDetails')

module.exports = {

    getDevicesPage: async (req,res) => {
        try {

            const devices = await DeviceDetails.find(req.params.id);
            res.render("getDevicesPage.ejs", {devices: devices})
            console.log("devices route working")
        } catch (err) {
            console.log(err)
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

    
    createNewDevice: async (req, res) => {
        try {
            await DeviceDetails.create({
                serialNumber: req.body.serialNumber,
                // groupId: req.user.id

            });
            console.log(DeviceDetails)
            res.redirect("/");
        } catch (err) {
            if (err) return res.status(500).send(err);
            res.redirect("/");
        }
    },

    
      
}