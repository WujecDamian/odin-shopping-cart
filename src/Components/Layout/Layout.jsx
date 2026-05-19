import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <main className="main">
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
