import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../node_modules/modern-normalize/modern-normalize.css";
import App from "./App.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import routes from "./routes.jsx";
import {
  RouterProvider,
  BrowserRouter,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
