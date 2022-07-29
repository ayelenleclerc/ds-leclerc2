import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCart = () => {
  const { cart, removeItem } = useContext(CartContext);
  return (
    <div>
      {cart.map((prod) => (
        <div key={prod.id}>
          <img src={prod.img} alt={prod.nombre} />
          <div>
            <h2>Elegiste a {prod.nombre}</h2>
            <p>Su precio por hora es de $ {prod.precio}.-</p>
            <p>La cantidad elegida es de {prod.cantidad} horas.</p>
            <p>
              Lamentablemente, el total es de $ {prod.precio * prod.cantidad}.
              Pero una suegra para mostrar lo vale!
            </p>
          </div>
          <button onClick={() => removeItem(prod.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default ItemCart;
