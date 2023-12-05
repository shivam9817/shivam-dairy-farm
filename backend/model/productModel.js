// productModel.js

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String }
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  stock_quantity: { type: Number },
  categories: { type: String },
  reviews: [reviewSchema] // Define the array of reviews using the reviewSchema
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = {ProductModel};
