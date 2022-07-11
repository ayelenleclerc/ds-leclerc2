import React from "react";
import ItemCount from "../botones/ItemCount";
const Item = ({ item }) => {
  const onAdd = () => {
    console.log("click");
  };
  return (
    <div className="item">
      <img className="item-img" src={item.img} alt="" />
      <div>
        <h2 className="item-title">{item.nombre}</h2>
        <p className="item-description">{item.descripcion}</p>
        <p className="item-description">Stock: {item.stock}</p>
        <p className="item-description">{item.precio} /unidad</p>
      </div>
      <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default Item;
