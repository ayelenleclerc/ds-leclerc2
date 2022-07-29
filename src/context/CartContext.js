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
        cart.map((producto) => {
          return producto.id === item.id
            ? { ...producto, cantidad: producto.cantidad + cantidad }
            : producto;
        })
      );
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };
  const totalPrecio = () => {
    return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
  };

  const totalProductos = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.cantidad,
      0
    );

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((producto) => producto.id === id) ? true : false;

  const removeItem = (id) =>
    setCart(cart.filter((producto) => producto.id !== id));

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        removeItem,
        addToCart,
        totalPrecio,
        totalProductos,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default Provider;
