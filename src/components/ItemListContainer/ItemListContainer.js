import "./itemList.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import productos from "../../mock/productos";
import Loader from "../Loader/Loader";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoria } = useParams();

  useEffect(() => {
    setCargando(true);
    const traerProductos = new Promise((res) => {
      const prodFiltrados = productos.filter(
        (prod) => prod.categoria === categoria
      );
      setTimeout(() => {
        categoria ? res(prodFiltrados) : res(productos);
      }, 2000);
    });
    traerProductos
      .then((data) => {
        setItems(data);
        setCargando(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoria]);

  return (
    <div>
      <h2 className="itemlist-titulo">Descubre a tu suegra ideal</h2>
      <p className="itemlist-parrafo">
        A continuación puedes elegir y adquirir el servicio de una o varias de
        nuestras mejores actrices.
      </p>
      <p className="itemlist-parrafo">
        ¿Querés una suegra digna de la envidia de tus amigas, de tus amigos y
        presentarles a la suegra más
        {<Link to="/categoria/buenas"> Buena </Link>}
        que existe?
      </p>
      <p className="itemlist-parrafo">
        ¿Querés una suegra para demostrarle a tus amigas y amigos que tus quejas
        son válidas, y que tu suegra es
        {<Link to="/categoria/malas"> Mala</Link>} de verdad?
      </p>
      <p className="itemlist-parrafo center">
        No lo dudes más!, contratación por horas.
      </p>
      {cargando ? <Loader /> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
