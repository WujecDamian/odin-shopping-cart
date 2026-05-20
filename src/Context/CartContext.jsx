import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart({ product, quantity }) {
    setCart([...cart, { product: product, quantity: quantity }]);
    console.table(cart);
  }
  function setCartFn({ product, quantity }) {
    setCart([...cart, { product: product, quantity: quantity }]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, setCartFn }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
