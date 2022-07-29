import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import productos from "../../mock/productos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const traerProductos = new Promise((res) => {
      const prodFiltrados = productos.filter(
        (prod) => prod.categoria === categoriaId
      );
      setTimeout(() => {
        categoriaId ? res(prodFiltrados) : res(productos);
      }, 2000);
    });
    traerProductos
      .then((data) => setItems(data))
      .catch((error) => {
        console.log(error);
      });
  }, [categoriaId]);

  return (
    <div>
      <h2 className="container-Titulo">Descubre a tu suegra ideal</h2>
      <p>
        A continuación puedes elegir y adquirir el servicio de una o varias de
        nuestras mejores actrices.
      </p>
      <p>
        ¿Querés una suegra digna de la envidia de tus amigas, de tus amigos y
        presentarles a la suegra más
        {<Link to="/categoria/buenas"> Buena </Link>}
        que existe?
      </p>
      <p>
        ¿Querés una suegra para demostrarle a tus amigas y amigos que tus quejas
        son válidas, y que tu suegra es
        {<Link to="/categoria/malas"> Mala</Link>} de verdad?
      </p>
      <p>No lo dudes más!, contratación por horas.</p>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
