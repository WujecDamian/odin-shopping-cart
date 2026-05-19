import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <section className={styles.links}>
        <Link to="home" className={styles.link}>
          Home
        </Link>
        <Link to="shop" className={styles.link}>
          Shop
        </Link>
        <Link to="cart" className={styles.link}>
          Cart
        </Link>
      </section>
    </nav>
  );
};

export default NavBar;
