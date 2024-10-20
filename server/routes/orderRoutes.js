const express = require('express');
const Order = require('../models/Order'); 

const router = express.Router();

let orderCount = 1;
const generateOrderNumber = () => `BURG-${String(orderCount++).padStart(3, '0')}`;

router.post('/', async (req, res) => {
  const { mobileNumber, burgerDetails, totalPrice } = req.body;
  const orderNumber = generateOrderNumber();

  if (!burgerDetails || burgerDetails.length === 0) {
    return res.status(400).json({ message: 'Burger details are required.' });
  }

  if (!totalPrice || totalPrice <= 0) {
    return res.status(400).json({ message: 'Total price must be greater than 0.' });
  }

  const newOrder = new Order({
    mobileNumber,
    orderNumber,
    burgerDetails,
    totalPrice
  });

  try {
    await newOrder.save();
    res.status(200).json({ orderNumber });
  } catch (err) {
    res.status(500).json({ message: 'Error placing order', error: err });
  }
});

module.exports = router;
