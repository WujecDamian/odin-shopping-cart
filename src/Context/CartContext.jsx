import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart({ product, quantity }) {
    setCart([...cart, { product: product, quantity: quantity }]);
    console.table(cart);
  }
  function setCartFn({ product, quantity }) {
    let newItem = { product: product, quantity: quantity };
    let modifiedId = product.id;
    console.log("Modified ID " + modifiedId);
    let newCart = cart.filter((Product) => Product.product.id != modifiedId);
    setCart([...newCart, newItem]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, setCartFn }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
