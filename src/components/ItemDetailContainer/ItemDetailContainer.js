/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "../../mock/productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  const productoById = new Promise((res) => {
    setTimeout(() => {
      res(productos.find((producto) => producto.id === id));
    }, 2000);
  });

  useEffect(() => {
    productoById.then((respuesta) => {
      setItem(respuesta);
      console.log(respuesta);
    });
  }, [id]);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
