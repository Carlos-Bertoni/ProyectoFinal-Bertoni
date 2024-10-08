// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Añadir producto al carrito
  const addItemToCart = (item, quantity) => {
    setCartItems(prevItems => {
      const itemInCart = prevItems.find(cartItem => cartItem.id === item.id);
      if (itemInCart) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity }];
    });
  };

  // Eliminar producto del carrito
  const removeItemFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  // Calcular total de productos en el carrito
  const getTotalItems = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Calcular el precio total del carrito
  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart, // Exportar función para eliminar producto
        getTotalItems,
        getTotalPrice,
        setCartItems, // También exportamos setCartItems por si es necesario
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
