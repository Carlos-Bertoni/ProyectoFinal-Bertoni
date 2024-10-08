//src/components/MockItemDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MockItemDetail = [
  { id: 1, name: 'Hamburguesa Clásica', image: '../images/hamb-clasica.webp', description: 'Deliciosa hamburguesa 100% carne vacuna.', price: 295 },
  { id: 2, name: 'Hamburguesa Vegana', image: '../images/hamb-vegana.jpg', description: '100% Ingredientes naturales', price: 310 },
  { id: 3, name: 'Pizza Napolitana', image: '../images/pizza-napol01.jpg', description: 'Pizza con salsa de tomate y albahaca.', price: 420 },
  { id: 4, name: 'Pizza Margarita', image: '../images/pizza-napol02.jpg', description: 'Pizza con salsa de tomate y huevo.', price: 460 },
  { id: 5, name: 'Refresco Cola', image: '../images/coca-cola.jpg', description: 'Coca-Cola, 350 ml.', price: 120 },
  { id: 6, name: 'Sprite', image: '../images/sprite.png', description: 'Sprite sin azúcar, 350 ml.', price: 120 },
  { id: 7, name: 'Cerveza Corona', image: '../images/cerveza-corona.jpg', description: 'Cerveza Corona, botella de 330 ml.', price: 180 },
];

export default MockItemDetail;
