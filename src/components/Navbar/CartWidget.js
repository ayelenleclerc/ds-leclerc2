import "./Navbar.css";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalProductos } = useContext(CartContext);
  return (
    <div className="cartWidget">
      <img
        className="cart-widget"
        src="https://res.cloudinary.com/ayelenleclerc/image/upload/v1657573858/pngegg_hhmrrk.png"
        alt="carrito"
      />
      <span className="cart-widget-span">{totalProductos() || " "}</span>
    </div>
  );
};

export default CartWidget;
