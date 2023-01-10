const mongoose = require('mongoose');
const deviceGroupSchema = new mongoose.Schema({

//   lastTimeStamp: {
//     updatedAt: "updated_at"
// },
    
lastModified: {
  type: Date
},
lastModifiedBy: {
  type: String,
  default: 'Admin',
},
groupName: {
  type: String,
  required: true
},
description: {
  type: String,
  default: "Unassociated group. New or decommissioned"
},
date: {
  type: Date,
  default: Date.now
},
device: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "DeviceDetails",
},

}, {
  timestamps: {
    updatedAt: 'lastModified',
  },
});

module.exports = mongoose.model('DeviceGroup', deviceGroupSchema);


