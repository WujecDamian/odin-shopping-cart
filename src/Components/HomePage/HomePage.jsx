import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import homeImage from "../../assets/images/homepage_imgLarge.jpeg";

const HomePage = () => {
  return (
    <section className={styles.home}>
      <section className={styles.home__left}>
        <h1>Rowan Calder</h1>
        <h2>
          Timeless <span>essentials</span> for the modern life.
        </h2>
        <Link to="../shop" id="link" className={styles.link}>
          Discover Rowan Calder
        </Link>
      </section>
      <section className={styles.home__right}>
        <img src={homeImage} alt="Woman in Rowan Calder lingerie" />
      </section>
    </section>
  );
};

export default HomePage;
