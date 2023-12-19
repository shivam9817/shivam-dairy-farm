const express = require("express");
const { Order } = require("../model/orderModel");
const { authMiddleware } = require("../middleware/authenticate");
const addressRouter = express.Router();

addressRouter.post("/",  async (req, res) => {
    try {
        const { orderId, email, shipmentAddress,mobileNumber,city,state,postalCode} = req.body;
        console.log("sss",orderId,shipmentAddress,mobileNumber,postalCode)
        // Find the order by orderId
        const existingOrder = await Order.findById(orderId);

        if (!existingOrder) {
            return res.status(404).json ({ message: "Order not found for the given orderId" });
        }

        // Create a new address object
        const newAddress = {
            orderId: orderId,
            email:email,
            shipmentAddress:shipmentAddress,
            mobileNumber:mobileNumber,
            city: city,
            state: state,
            postalCode:postalCode,
            // country: country
        };

        // Ensure that shippmentAddress field is an array and initialize it if undefined
        existingOrder.shippmentAddress = existingOrder.shippmentAddress || [];
        existingOrder.shippmentAddress.push(newAddress);

        // Save the changes to the existing order
        await existingOrder.save();

        res.status(200).json(existingOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

module.exports = { addressRouter };