// src/pages/CartPage.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../store/cartSlice';
import CartItem from '../components/CartItem'; // Import CartItem component

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux store
  const dispatch = useDispatch();

  // Calculate the total cost for all items in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle continue shopping (can be customized later)
  const handleContinueShopping = () => {
    alert('Continue Shopping functionality will be added later!');
  };

  // Checkout function (for future implementation)
  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {/* Render each cart item */}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <p>Total Cost: ${calculateTotalAmount()}</p>
        <button onClick={handleContinueShopping}>Continue Shopping</button>
        <button onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
