// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item, quantity) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((cartItem) => cartItem.id === item.id);
      if (itemInCart) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
        );
      }
      return [...prevItems, { ...item, quantity }];
    });
  };

  const getTotalItems = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, getTotalItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
