/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../botones/ItemCount";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);

  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    addToCart(item, cantidad);
  };

  return (
    <div className="item">
      <img className="item-img" src={item.img} alt={item.nombre} />
      <div>
        <h2 className="item-title">{item.nombre}</h2>
        <p className="item-description">{item.descripcion}</p>
        <p className="item-description">Stock: {item.stock}</p>
        <p className="item-description">{item.precio} /unidad</p>
      </div>
      {cantidad === 0 ? (
        <ItemCount
          stock={item.stock}
          initial={1}
          precio={item.precio}
          onAdd={onAdd}
        />
      ) : (
        <Link to="/cart">
          Añadiste {cantidad} unidades de {item.nombre} al carrito.
        </Link>
      )}
    </div>
  );
};
export default ItemDetail;
