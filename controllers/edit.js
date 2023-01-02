const DeviceDetails = require('../models/deviceDetails')

module.exports = {
  updateDevice: (req, res) => {
        const id = req.params.id;
        DeviceDetails.findByIdAndUpdate(
            id,
            {
                serialNumber: req.body.serialNumber
            },
            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/");
            });
    }
}