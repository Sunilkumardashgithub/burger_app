import React, { useState } from 'react';
import axios from 'axios';
import './OrderForm.css'; 

const OrderForm = ({ slices, totalPrice }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const burgerDetails = slices.map(slice => ({
      name: slice.name,
      price: slice.price,
      imageUrl: slice.image, 
    }));

    setLoading(true); 

    try {
      const res = await axios.post('http://localhost:5000/api/order', {
        mobileNumber,
        burgerDetails,
        totalPrice
      });
      setOrderNumber(res.data.orderNumber);
      setLoading(false); 
      console.log("Burger Details: ", burgerDetails);
      console.log("Total Price: ", totalPrice);

    } catch (err) {
      console.error("Error placing order", err);
      setLoading(false); 
    }
  };


  return (
    <div className="order-form-container">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
            placeholder="Enter your mobile number"
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
      {orderNumber && <p className="order-confirmation">Order placed! Your order number is <strong>{orderNumber}</strong></p>}
    </div>
  );
};

export default OrderForm;
