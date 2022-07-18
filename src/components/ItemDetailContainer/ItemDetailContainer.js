/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "../../mock/productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  const productoById = new Promise((res) => {
    setTimeout(() => res(productos), 2000);
  });

  useEffect(() => {
    productoById
      .then((res) => res.find((producto) => producto.id == id))
      .then((res) => setItem(res));
  }, []);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
