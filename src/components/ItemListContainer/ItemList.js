import "./itemList.css";
import React from "react";
import Item from "./Item";
const ItemList = ({ items }) => {
  //console.log(items);
  return (
    <div className="itemlist">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
