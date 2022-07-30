import "./cart.css";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCart = () => {
  const { cart, removeItem } = useContext(CartContext);
  return (
    <div>
      {cart.map((prod) => (
        <div className="cart-item" key={prod.id}>
          <img className="cart-img" src={prod.img} alt={prod.nombre} />
          <div className="cart-body">
            <h2 className="cart-titulo">Elegiste a {prod.nombre}</h2>
            <p className="cart-descripcion">
              Su precio por hora es de $ {prod.precio}.-
            </p>
            <p className="cart-descripcion">
              La cantidad elegida es de {prod.cantidad} horas.
            </p>
            <p className="cart-total">
              Lamentablemente, el total es de $ {prod.precio * prod.cantidad}.
              Pero una suegra para mostrar lo vale!
            </p>
          </div>
          <button className="cart-btn" onClick={() => removeItem(prod.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemCart;
