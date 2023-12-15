const mongoose = require('mongoose');

const ShipmentAddressSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  email: {
    type: String,
    required: true
  },
  shipmentAddress: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: Number,
    required: true
  },
  postalCode: {
    type:Number,
    required: true
  }
  // Other fields related to the shipment address
});

const ShipmentAddress = mongoose.model('ShipmentAddress', ShipmentAddressSchema);
module.exports = {ShipmentAddress};
