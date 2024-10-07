// src/components/CartWidget.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const itemCount = getTotalItems();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="../../public/images/cart-icon.png" alt="Carrito" style={{ width: '24px', marginRight: '15px' }} />
      <span>{itemCount}</span>
    </div>
  );
};

export default CartWidget;
