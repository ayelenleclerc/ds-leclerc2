import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const Provider = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const addToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((produco) => {
          return produco.id === item.id
            ? { ...produco, cantidad: produco.cantidad + cantidad }
            : produco;
        })
      );
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Provider;
