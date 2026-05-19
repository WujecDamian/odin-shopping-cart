import HomePage from "./Components/HomePage/HomePage";
import CartPage from "./Components/CartPage/CartPage";
import ShopPage from "./Components/ShopPage/ShopPage";

const routes = [
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
];

export default routes;
