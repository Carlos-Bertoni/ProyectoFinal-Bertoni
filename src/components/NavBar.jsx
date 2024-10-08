// src/components/NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <div>
        <NavLink to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          <img src="../../public/images/logo.png" alt="Logo" style={{ width: '50px' }} />
        </NavLink>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 10px' }}><NavLink to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</NavLink></li>
        <li style={{ margin: '0 10px' }}><NavLink to="/category/hamburguesas" style={{ color: '#fff', textDecoration: 'none' }}>Hamburguesas</NavLink></li>
        <li style={{ margin: '0 10px' }}><NavLink to="/category/pizzas" style={{ color: '#fff', textDecoration: 'none' }}>Pizzas</NavLink></li>
        <li style={{ margin: '0 10px' }}><NavLink to="/category/bebidas" style={{ color: '#fff', textDecoration: 'none' }}>Bebidas</NavLink></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
