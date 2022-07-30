import "./cart.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, clearCart, totalPrecio, totalProductos } =
    useContext(CartContext);

  const order = {
    buyer: {
      name: "Juan Perez",
      email: "JuanPerez@gmail.com",
      phone: "123456789",
      address: "Calle falsa 123",
    },
    items: cart.map((item) => ({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: item.cantidad,
    })),
    total: totalPrecio(),
  };

  function handleClick() {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => {
      console.log(id);
    });
  }

  if (cart.length === 0) {
    return (
      <h2 className="cart-vacio">
        Aún no elegiste una (o varias) Suegra(s). Pero podes ir a elegir a la
        ideal al <Link to="/">Inicio</Link>
      </h2>
    );
  }
  return (
    <div>
      <h2 className="cart-head-title">Suegri-Carrito</h2>
      <div className="cart-container">
        <div className="cart-itemContainer">
          <ItemCart />
        </div>
        <div className="cart-controls">
          <button className="cart-btn" onClick={clearCart}>
            Ya no quiero Suegra
          </button>
          <h3 className="cart-global">Total: ${totalPrecio()} </h3>
          <h3 className="cart-global">
            Total: {totalProductos()} horas de suegra!
          </h3>
          <button className="cart-btn btn-controls">
            <Link to="/">Seguir eligiendo Suegra</Link>
          </button>
          <button className="cart-btn btn-controls" onClick={handleClick}>
            <Link to="/">Finalizar compra</Link>
          </button>
          <p className="cart-contacto">
            ** Nos contactaremos para acordar fechas y horarios...
          </p>
          <p className="cart-contacto">
            Si! le podes acomodar la agenda a tu suegra!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
