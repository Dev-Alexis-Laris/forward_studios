import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="logo-brand">Forward Studios</a>
      <ul className="nav-list">
        <li><a href="#">Inicio</a></li>
        <li><a href="#quienes-somos">¿Quiénes Somos?</a></li>
        <li><a href="#works">Nuestro Trabajo</a></li>
        <li><a href="#partners">Partners</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
