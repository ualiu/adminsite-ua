const mongoose = require('mongoose');
const deviceDetailsSchema = new mongoose.Schema({

    lastModified: {
        type: Date,
      },
      lastModifiedBy: {
        type: String,
        default: 'Admin',
      },
      serialNumber: {
        type: Number,
        required: true,
      },
      groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DeviceGroup',
      },
      date: {
        type: Date,
        default: Date.now,
      },
    }, {
      timestamps: {
        updatedAt: 'lastModified',
      },
    });
 
module.exports = mongoose.model('DeviceDetails', deviceDetailsSchema);

