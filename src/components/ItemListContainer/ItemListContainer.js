import "./itemList.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Loader from "../Loader/Loader";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    if (categoriaId) {
      const itemFiltrado = query(
        itemCollection,
        where("categoria", "==", categoriaId)
      );
      getDocs(itemFiltrado).then((docs) => {
        const data = docs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(data);
        setCargando(false);
      });
    } else {
      getDocs(itemCollection).then((docs) => {
        const data = docs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(data);
        setCargando(false);
      });
    }
  }, [categoriaId]);

  return (
    <div className="container">
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
