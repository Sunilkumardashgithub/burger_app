const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    required: true,
  },
  orderNumber: {
    type: String,
    required: true,
  },
  burgerDetails: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      imageUrl: { type: String, required: true }
    }
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
