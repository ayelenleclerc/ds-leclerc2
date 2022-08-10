import "./Navbar.css";
import React from "react";

import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <h1 className="navbar-title">Dulce Suegra</h1>
        </div>
        <div className="nav-options">
          <ul className="nav-ul">
            <Link to="/" className="nav-li">
              Inicio
            </Link>
            <Link to="/categoria/buena" className="nav-li">
              Buenas
            </Link>
            <Link to="/categoria/mala" className="nav-li">
              Malas
            </Link>
          </ul>
        </div>
        <Link to="/cart" className="nav-li">
          <CartWidget />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
