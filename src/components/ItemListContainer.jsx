// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

const mockItems = [
  { id: 1, name: 'Hamburguesa Clásica', category: 'hamburguesas' },
  { id: 2, name: 'Hamburguesa Vegana', category: 'hamburguesas' },
  { id: 3, name: 'Pizza Napolitana', category: 'pizzas' },
  { id: 4, name: 'Pizza Margarita', category: 'pizzas' },
  { id: 5, name: 'Refresco Cola', category: 'bebidas' },
  { id: 6, name: 'Sprite', category: 'bebidas' },
  { id: 7, name: 'Cerveza Corona', category: 'bebidas' },
];

const ItemListContainer = ({ message }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const filteredItems = categoryId
            ? mockItems.filter(item => item.category === categoryId)
            : mockItems;
          resolve(filteredItems);
        }, 1000);
      });
    };

    fetchItems().then(setItems); // setItems recibe directamente el resultado
  }, [categoryId]);

  return (
    <div style={{ padding: '30px' }}>
      <h2>{message}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

