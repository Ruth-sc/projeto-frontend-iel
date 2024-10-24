import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navigation.css'; // Importando o CSS

const Navigation = () => {
  return (
    <nav style={{ display: 'flex', marginTop: '10px' }}>
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Home
      </NavLink>
      <NavLink to="/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Produtos
      </NavLink>
      <NavLink to="/categories" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Categorias
      </NavLink>
      <NavLink to="/orders" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Meus Pedidos
      </NavLink>
    </nav>
  );
};

export default Navigation;
