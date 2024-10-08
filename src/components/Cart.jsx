// src/components/Cart.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom'; // Importamos useNavigate para redirigir
import Swal from 'sweetalert2';
import BuyerForm from './BuyerForm'; // Importamos el formulario del comprador

const Cart = () => {
  const { cartItems, getTotalPrice, removeItemFromCart, setCartItems } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false); // Estado para mostrar el formulario
  const navigate = useNavigate(); // Hook para redirigir al Home

  // Función que se ejecuta tras confirmar la compra en el formulario
  const handlePurchaseConfirmation = (buyerData) => {
    const purchaseId = Math.random().toString(36).substr(2, 9); // Generar ID de compra
    Swal.fire({
      title: '¡Gracias por tu compra!',
      text: `Tu ID de compra es: ${purchaseId}`,
      icon: 'success',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        setCartItems([]); // Vaciar el carrito
        navigate('/'); // Redirigir al Home
      }
    });
  };

  // Si el carrito está vacío, mostramos un mensaje
  if (cartItems.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td> {/* Mostramos el ID del producto */}
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td> {/* Subtotal (cantidad * precio) */}
              <td>
                {/* Llamamos a removeItemFromCart en lugar de setCartItems */}
                <button onClick={() => removeItemFromCart(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ${getTotalPrice()}</h3> {/* Total del carrito */}

      {!showForm && (
        <button onClick={() => setShowForm(true)}>Confirmar compra</button> // Mostrar formulario al hacer clic
      )}

      {showForm && (
        <BuyerForm onConfirm={handlePurchaseConfirmation} /> // Formulario del comprador
      )}
    </div>
  );
};

export default Cart;



