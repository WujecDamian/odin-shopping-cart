import { useContext } from "react";
import styles from "./CartPage.module.css";
import { CartContext } from "../../Context/CartContext";
import CartItem from "./CartItem/CartItem";

const CartPage = () => {
  const { cart } = useContext(CartContext);
  console.table({ cart });
  const listProducts = cart.map((product) => (
    <CartItem props={product}></CartItem>
  ));

  return (
    <section className={styles.cart}>
      <h1>Cart</h1>
      <section className={styles.cart__left}>
        <ul>{listProducts}</ul>
      </section>
      <section className={styles.cart__right}></section>
    </section>
  );
};

export default CartPage;
