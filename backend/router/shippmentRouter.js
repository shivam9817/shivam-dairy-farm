const express = require("express");
const { ShipmentAddress } = require("../model/shippmentModel");

const shippmentRouter = express.Router();

// Route to save shipment address data for a user
shippmentRouter.post("/", async (req, res) => {
  try {
    const { email, shipmentAddress, mobileNumber, postalCode } = req.body;
    const userID = req.user._id; // Assuming the user ID is available in req.user

    // Check for duplicate email
    const existingAddress = await ShipmentAddress.findOne({ email });

    if (existingAddress) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Create a new shipment address document
    const newShipmentAddress = new ShipmentAddress({
      userID,
      email,
      shipmentAddress,
      mobileNumber,
      postalCode
      // Other fields related to the shipment address
    });

    // Save the shipment address data
    await newShipmentAddress.save();

    res.status(201).json({ message: "Shipment address saved successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error occurred while saving shipment address");
  }
});

module.exports = {
  shippmentRouter
};
 