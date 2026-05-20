import styles from "./CartItem.module.css";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

const CartItem = ({ props }) => {
  const [quantity, setQuantity] = useState(0);
  const { setCartFn } = useContext(CartContext);

  useEffect(() => {
    setQuantity(props.quantity);
  }, []);

  function handleChange(e) {
    const value = e.target.value;
    setQuantity(value);
    setCartFn(props.product, value);
  }
  function addQuantity() {
    let quantityOld = Number(quantity);
    let newQuantity = Number(quantityOld + 1);
    setQuantity(Number(newQuantity));
    setCartFn(props.product, newQuantity);
  }
  function deductQuantity() {
    if (quantity > 0) {
      let newQuantity = props.quantity - 1;
      let product = props.product;
      setQuantity(newQuantity);
      setCartFn({ product, newQuantity });
    }
  }
  return (
    <section className={styles.cart__item}>
      <section className={styles.item__left}>
        <img src={props.product.image} alt="Image of product" />
      </section>
      <section className={styles.item__right}>
        <h2>{props.product.title}</h2>
        <h3>${props.product.price};-</h3>
        <div className={styles.item_addToCart}>
          <input
            type="number"
            value={props.quantity}
            onChange={(e) => handleChange(e)}
          />
          <button onClick={addQuantity}>+</button>
          <button onClick={deductQuantity}>-</button>
        </div>
      </section>
    </section>
  );
};

export default CartItem;
