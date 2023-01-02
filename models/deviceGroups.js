const mongoose = require('mongoose');
const deviceGroupSchema = new mongoose.Schema({

  lastTimeStamp: {
    updatedAt: "updated_at"
},
    
    lastmodified: {
    updatedAt: 'updated_at'
},
lastModifiedBy: {
  type: String,
  default: 'Admin',
},
settingId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "DeviceSettings",
},
groupName: {
    type: String,
    default: 'Group Name'
},
description: {
  type: String,
  default: "Unassociated group. New or decommissioned"
},
date: {
  type: Date,
  default: Date.now
},

},

{timestamps: true});
module.exports = mongoose.model('DeviceGroup', deviceGroupSchema);


