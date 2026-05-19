import HomePage from "./Components/HomePage/HomePage";
import CartPage from "./Components/CartPage/CartPage";
import ShopPage from "./Components/ShopPage/ShopPage";
import ErrorElement from "./Components/ErrorElement/ErrorElement";

const routes = [
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "shop",
    element: <ShopPage></ShopPage>,
    errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "cart",
    element: <CartPage></CartPage>,
    errorElement: <ErrorElement></ErrorElement>,
  },
];

export default routes;
