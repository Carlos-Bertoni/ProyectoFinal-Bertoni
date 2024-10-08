// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'; // Importa el componente Cart
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer message="¡Bienvenidos! Elige aquí los productos que desees comprar" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer message="Categoría seleccionada" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} /> {/* Asegúrate de que la ruta esté */}
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;


