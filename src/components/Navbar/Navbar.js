import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-title">Dulce Suegra</h1>
        <ul className="nav-ul">
          <Link to="/" className="nav-li">
            Inicio
          </Link>
          <Link to="/categoria/buenas" className="nav-li">
            Buenas
          </Link>
          <Link to="/categoria/malas" className="nav-li">
            Malas
          </Link>
        </ul>
        <Link to="/cart" className="nav-li">
          <CartWidget />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
