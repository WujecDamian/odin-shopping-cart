import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart({ product, quantity }) {
    let newItem = { product: product, quantity: quantity };
    const newCart = [...cart, newItem];
    const sortedCart = newCart.sort((a, b) => a.product.id - b.product.id);
    setCart(sortedCart);
  }
  function setCartFn({ product, quantity }) {
    let newItem = { product: product, quantity: quantity };
    let modifiedId = product.id;
    let newCart = cart.filter((Product) => Product.product.id != modifiedId);
    newCart.push(newItem);
    const sortedCart = newCart.sort((a, b) => a.product.id - b.product.id);
    setCart(sortedCart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, setCartFn }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
