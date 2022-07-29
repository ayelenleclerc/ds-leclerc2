import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, clearCart, totalPrecio, totalProductos } =
    useContext(CartContext);
  if (cart.length === 0) {
    return (
      <h2>
        Aún no hay Suegra, ir a elegir a la ideal al <Link to="/">Inicio</Link>
      </h2>
    );
  }
  return (
    <div>
      <ItemCart />
      <button onClick={clearCart}>Ya no quiero Suegra</button>
      <h3>Total: ${totalPrecio()} </h3>
      <h3>Total: {totalProductos()} horas de suegra!</h3>
      <p>
        <button>
          <Link to="/">Seguir eligiendo Suegra</Link>
        </button>
        Nos contactaremos para acordar fechas y horarios... si! le podes
        acomodar la agenda a tu suegra!
      </p>
    </div>
  );
};

export default Cart;
