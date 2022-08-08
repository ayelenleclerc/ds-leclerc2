import "./cart.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, clearCart, totalPrecio, totalProductos } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <h2 className="cart-vacio">
        Aún no elegiste una (o varias) Suegra(s). Pero podes ir a elegir a la
        ideal al <Link to="/">Inicio</Link>
      </h2>
    );
  }
  return (
    <div>
      <h2 className="cart-head-title">Suegri-Carrito</h2>
      <div className="cart-container">
        <div className="cart-itemContainer">
          <ItemCart />
        </div>
        <div className="cart-controls">
          <button className="cart-btn" onClick={clearCart}>
            Ya no quiero Suegra
          </button>
          <h3 className="cart-global">Total: ${totalPrecio()} </h3>
          <h3 className="cart-global">
            Total: {totalProductos()} horas de suegra!
          </h3>
          <button className="cart-btn btn-controls">
            <Link to="/">Seguir eligiendo Suegra</Link>
          </button>
          <button className="cart-btn btn-controls">
            <Link to="/Checkout">Confirmar compra</Link>
          </button>
          <p className="cart-contacto">
            ** Nos contactaremos para acordar fechas y horarios...
          </p>
          <p className="cart-contacto">
            Si! le podes acomodar la agenda a tu suegra!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
