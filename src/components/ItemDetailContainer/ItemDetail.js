/* eslint-disable react-hooks/exhaustive-deps */
import ItemCount from "../botones/ItemCount";
import React, { useEffect } from "react";
const ItemDetail = ({ item }) => {
  const onAdd = () => {
    console.log("click");
  };
  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <div className="item">
      <img className="item-img" src={item.img} alt={item.nombre} />
      <div>
        <h2 className="item-title">{item.nombre}</h2>
        <p className="item-description">{item.descripcion}</p>
        <p className="item-description">Stock: {item.stock}</p>
        <p className="item-description">{item.precio} /unidad</p>
      </div>
      <ItemCount
        stock={item.stock}
        initial={1}
        precio={item.precio}
        onAdd={onAdd}
      />
    </div>
  );
};
export default ItemDetail;
