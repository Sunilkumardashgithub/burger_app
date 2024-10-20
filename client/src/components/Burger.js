import React from 'react';
import './Burger.css'; 
import alooTikkiImg from './images/aloo-tikki.png';
import paneerImg from './images/paneer.png';
import cheeseImg from './images/cheese.png';
import burgerBunTopImg from './images/burger-bun-top.png';

const slicesData = [
  { name: 'Aloo Tikki', price: 20, image: alooTikkiImg },
  { name: 'Paneer', price: 30, image: paneerImg },
  { name: 'Cheese', price: 10, image: cheeseImg }
];

const Burger = ({ slices, onSlicesChange, quantity, onQuantityChange }) => {
  const addSlice = (slice) => {
    const newSlices = [...slices, slice];
    onSlicesChange(newSlices); 
  };

  const removeSlice = (index) => {
    const newSlices = slices.filter((_, i) => i !== index);
    onSlicesChange(newSlices); 
  };

  const totalPrice = slices.reduce((acc, slice) => acc + slice.price, 0) * quantity;

  return (
    <div className="burger-builder-container">
      <h1>Burger Builder</h1>
      <div className="burger-section">
        <div className="burger-visual">
          <img src={burgerBunTopImg} alt="Top Bun" className="burger-bun-top" />
          {slices.map((slice, index) => (
            <div key={index} className="burger-slice">
              <img src={slice.image} alt={slice.name} className="burger-slice-img" />
              <button className="remove-button" onClick={() => removeSlice(index)}>X</button>
            </div>
          ))}
          <img src={burgerBunTopImg} alt="Bottom Bun" className="burger-bun-bottom" />
        </div>
        <div className="controls">
          <h3>Choose Slice</h3>
          {slicesData.map((slice, index) => (
            <button key={index} className="slice-button" onClick={() => addSlice(slice)}>
              <img src={slice.image} alt={slice.name} className="slice-img" /> {slice.name} - {slice.price} ₹
            </button>
          ))}
        </div>
      </div>
      <div className="summary">
        <h3>Total Price: {totalPrice} ₹</h3>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => onQuantityChange(e.target.value)}
            className="quantity-input"
          />
        </label>
      </div>
    </div>
  );
};

export default Burger;
