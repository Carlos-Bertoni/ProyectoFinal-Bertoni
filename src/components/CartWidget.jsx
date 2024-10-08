// src/components/CartWidget.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para redirigir

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const itemCount = getTotalItems();
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart'); // Redirigimos a la página del carrito
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleCartClick}>
      <img src="../../public/images/cart-icon.png" alt="Carrito" style={{ width: '24px', marginRight: '15px' }} />
      <span>{itemCount}</span>
    </div>
  );
};

export default CartWidget;

