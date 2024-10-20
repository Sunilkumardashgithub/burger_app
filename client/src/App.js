import React, { useState } from 'react';
import Burger from './components/Burger';
import OrderForm from './components/OrderForm';
import './App.css';

const App = () => {
  const [slices, setSlices] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleSlicesChange = (newSlices) => {
    setSlices(newSlices);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  // Calculate total price 
  const totalPrice = slices.reduce((acc, slice) => acc + slice.price, 0) * quantity;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Burger Builder</h1>
      </header>

      <main style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Burger
          slices={slices}
          onSlicesChange={handleSlicesChange}
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
        />

        <OrderForm slices={slices} totalPrice={totalPrice} />
      </main>
    </div>
  );
};

export default App;
