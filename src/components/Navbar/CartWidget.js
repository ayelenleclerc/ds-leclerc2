import React from "react";

const CartWidget = () => {
  return (
    <div className="cartWidget">
      <img
        className="cart-widget"
        src="https://res.cloudinary.com/ayelenleclerc/image/upload/v1657573858/pngegg_hhmrrk.png"
        alt="carrito"
      />{" "}
      <span className="cart-widget-span">4</span>
    </div>
  );
};

export default CartWidget;
