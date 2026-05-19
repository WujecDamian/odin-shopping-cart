import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
import CartProvider from "../../Context/CartContext";

const Layout = () => {
  return (
    <>
      <CartProvider>
        <NavBar></NavBar>
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer></Footer>
      </CartProvider>
    </>
  );
};

export default Layout;
