import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <section className="links">
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
      </section>
    </nav>
  );
};

export default NavBar;
