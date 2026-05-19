import { useEffect, useState } from "react";
import ItemCard from "./ItemCard/ItemCard";
import styles from "./ShopPage.module.css";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc&limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className={styles.shop}>
      <h1>Shop</h1>
      <section className={styles.products}>
        {products.map((product) => (
          <ItemCard props={product} key={product.id}></ItemCard>
        ))}
      </section>
    </section>
  );
};

export default ShopPage;
