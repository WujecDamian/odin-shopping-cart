import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
