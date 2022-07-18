import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-title">Distribuidora Suarez</h1>
        <ul className="nav-ul">
          <Link to="/" className="nav-li">
            Golosinas
          </Link>
          {/* <Link to="/item/:item" className="nav-li">
            Productos
          </Link> */}
          <li className="nav-li">Contacto</li>
        </ul>
        <CartWidget />
      </nav>
    </>
  );
};

export default Navbar;
