// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="header">
        <a href="#inicio" className="nav-logo">
            <img src="/assets/img/Artesanal621.png" alt="Cerveza 621 Logo" id="logo" /> 
        </a>
        
        <nav className="navbar">
            <ul>
                <li><a href="#inicio">INICIO</a></li>
                <li><a href="#nosotros">NOSOTROS</a></li>
                <li><a href="#cervezas">CERVEZAS</a></li>
                <li><a href="#galeria">GALERÍA</a></li>
                <li><a href="#novedades">NOVEDADES</a></li>
                <li><a href="#contacto">CONTACTO</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;