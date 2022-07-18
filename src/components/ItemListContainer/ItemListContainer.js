import { useState, useEffect } from "react";
import productos from "../../mock/productos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const traerProductos = new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
    traerProductos
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2 className="container-Titulo">Felfort</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
