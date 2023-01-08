const DeviceDetails = require('../models/deviceDetails')

module.exports = {

  getDeviceEdit: (req, res) => {
    const id = req.params.id;
    console.log(id)
    DeviceDetails.find({}, (err, devicedetails) => {
        res.render("editDevicePage.ejs", {devicedetailsList: devicedetails, idDevice: id})
    })
  },  
  updateDevice: (req, res) => {
        const id = req.params.id;
        console.log(id)
        DeviceDetails.findByIdAndUpdate(
            id,
            {
                serialNumber: req.body.serialNumber
            },
            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/");
            });
    },

}