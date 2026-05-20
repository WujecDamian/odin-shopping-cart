import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { CartContext } from "../../Context/CartContext";
import { useContext, useEffect } from "react";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  let cartQuantity = 0;

  cartQuantity = 0;
  cart.forEach((product) => {
    cartQuantity += product.quantity;
  });
  return (
    <nav className={styles.nav}>
      <section className={styles.links}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="shop" className={styles.link}>
          Shop
        </Link>
        <Link to="cart" className={styles.link}>
          Cart <span className={styles.cart_quantity}>{cartQuantity}</span>
        </Link>
      </section>
    </nav>
  );
};

export default NavBar;
