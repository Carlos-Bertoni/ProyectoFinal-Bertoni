// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import MockItemDetail from './MockItemDetail';
import { CartContext } from '../context/CartContext';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchItem = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const foundItem = MockItemDetail.find(item => item.id === parseInt(itemId));
          resolve(foundItem);
        }, 1000);
      });
    };

    fetchItem().then(setItem); // Actualiza el estado con el resultado
  }, [itemId]);

  const handleAddToCart = () => {
    if (item) { // Verifica que el item exista
      addItemToCart(item, quantity); 
      console.log(`Producto "${item.name}" agregado al carrito.`);
    }
  };

  if (!item) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div style={{ width: '300px', padding: '20px', textAlign: 'center', border: '2px solid #ccc' }}>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} style={{ width: '300px', margin: '20px 0' }} />
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <ItemCount count={quantity} setCount={setQuantity} />
      <button 
        onClick={handleAddToCart}
        style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;


