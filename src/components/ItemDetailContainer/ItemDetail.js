/* eslint-disable react-hooks/exhaustive-deps */
import "./itemDetail.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);

  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    addToCart(item, cantidad);
  };

  return (
    <div className="itemDetail container">
      <div className="itemDetail-imagen">
        <img className="itemDetail-img" src={item.img} alt={item.nombre} />
      </div>
      <div className="itemDetail-cuerpo">
        <h2 className="itemDetail-title">{item.nombre}</h2>
        <p className="itemDetail-description">{item.descripcion}</p>
        <p className="itemDetail-description">
          Horas disponibles por semana: {item.stock}
        </p>
        <p className="itemDetail-description">Precio: ${item.precio} /hora</p>

        {cantidad === 0 ? (
          <ItemCount
            stock={item.stock}
            initial={1}
            precio={item.precio}
            onAdd={onAdd}
          />
        ) : (
          <Link to="/cart">
            <span className="itemDetail-span">
              Añadiste {cantidad} horas de <strong>{item.nombre}</strong> al
              <span className="itemDetail-span intro"> Suegri-Carrito</span>.
            </span>
            <br />
            <button className="itemDetail-btn">Ir al Suegri-Carrito</button>
          </Link>
        )}
        <Link to="/">
          <button className="itemDetail-btn"> Seguir buscando suegra</button>
        </Link>
      </div>
    </div>
  );
};
export default ItemDetail;
