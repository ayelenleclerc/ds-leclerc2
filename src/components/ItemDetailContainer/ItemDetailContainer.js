/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import "./itemDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loader from "../Loader/Loader";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = doc(db, "items", id);
    getDoc(itemCollection).then((doc) =>
      setItem({ id: doc.id, ...doc.data() })
    );
    setCargando(false);
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      {cargando ? <Loader /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
