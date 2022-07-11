import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <>
      <h1 className="navbar-title">Distribuidora Suarez</h1>
      <nav className="navbar">
        <ul className="nav-ul">
          <li className="nav-li">Marcas</li>
          <li className="nav-li">Productos</li>
          <li className="nav-li">Contacto</li>
        </ul>
      </nav>
      <CartWidget />
    </>
  );
};

export default Navbar;
