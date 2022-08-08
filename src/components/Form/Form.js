import "./form.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import Swal from "sweetalert2";

const Form = () => {
  const { cart, clearCart, totalPrecio, totalProductos } =
    useContext(CartContext);
  const [form, setForm] = useState({});
  const order = {
    buyer: {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
    },
    items: cart.map((item) => ({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: item.cantidad,
    })),
    suegras: totalProductos(),
    total: totalPrecio(),
  };

  function handleClick() {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => {
      modalBasico(id);
    });
  }
  const handleSubmit = (e) => {
    handleClick();
    clearCart();
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const modalBasico = (id) => {
    Swal.fire({
      title: "Gracias por elegir Dulce Suegra!",
      text: `Su Orden: (${id}) ha sido realizada con éxito!`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  return (
    <>
      <h1 className="titulo-formulario">Generar orden de Compra</h1>
      <form className="formulario">
        <label className="formulario-label" htmlFor="name">
          Nombre y Apellido
        </label>
        <input
          className="formulario-input"
          type="text"
          name="name"
          placeholder="Brad Pitt o Angelina Jolie pero real"
          required={true}
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor="email" className="formulario-label">
          Email
        </label>
        <input
          className="formulario-input"
          type="email"
          name="email"
          placeholder="ejemplo@ejemplo.com"
          required={true}
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="phone" className="formulario-label">
          Teléfono
        </label>
        <input
          className="formulario-input"
          type="phone"
          name="phone"
          minLength={10}
          maxLength={17}
          placeholder="+54 9 11 22334455"
          required={true}
          value={form.phone}
          onChange={handleChange}
        />

        <label htmlFor="address" className="formulario-label">
          Dirección
        </label>
        <input
          className="formulario-input"
          type="text"
          name="address"
          placeholder="Calle falsa 123, Ciudad de Buenos Aires"
          required={true}
          value={form.address}
          onChange={handleChange}
        />
        <h5>
          Nos pondremos en contacto para finalizar las verificaciones y el pago.
        </h5>
        <h5> Muchas Gracias</h5>
        <button className="btn-form" type="submit" onClick={handleSubmit}>
          <Link to="/">Generar orden</Link>
        </button>
      </form>
    </>
  );
};
export default Form;
