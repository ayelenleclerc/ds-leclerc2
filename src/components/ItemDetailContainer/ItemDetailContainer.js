/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import "./itemDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "../../mock/productos";
import Loader from "../Loader/Loader";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  const productoById = new Promise((res) => {
    setTimeout(() => res(productos), 2000);
  });

  useEffect(() => {
    productoById
      .then((res) => res.find((producto) => producto.id === id))
      .then((res) => {
        setItem(res);
        setCargando(false);
      });
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      {cargando ? <Loader /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
