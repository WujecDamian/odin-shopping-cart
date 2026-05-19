import { useContext, useState } from "react";
import styles from "./ItemCard.module.css";
import { CartContext } from "../../../Context/CartContext";

const ItemCard = ({ props }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);

  function handleChange(e) {
    const value = e.target.value;
    setQuantity(value);
  }
  function addQuantity() {
    let quantityOld = Number(quantity);
    let newQuantity = Number(quantityOld + 1);
    setQuantity(Number(newQuantity));
  }
  function deductQuantity() {
    if (quantity > 0) {
      let newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  }

  return (
    <section className={styles.itemCard}>
      <div className={styles.itemCard_left}>
        <img src={props.image} alt="" />
      </div>
      <div className={styles.itemCard_right}>
        <h2 id="title">{props.title}</h2>
        <h3 id="description">{props.description}</h3>
        <span id="category" className={styles.category}>
          {props.category}
        </span>
        <span className={styles.price}>${props.price};-</span>
        <div className={styles.item_addToCart}>
          <div className={styles.quantity}>
            <input
              type="number"
              name=""
              id=""
              value={quantity}
              onChange={(e) => handleChange(e)}
            />
            <button onClick={addQuantity}>+</button>
            <button onClick={deductQuantity}>-</button>
          </div>
          <div className={styles.addToCart}>
            <button
              onClick={() =>
                addToCart({
                  product: props,
                  quantity: quantity,
                })
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemCard;
