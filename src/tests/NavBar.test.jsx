import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import NavBar from "../Components/NavBar/NavBar";

test("shows navigation links and cart quantity", () => {
  const value = {
    cart: [
      { product: { id: 1 }, quantity: 3 },
      { product: { id: 2 }, quantity: 2 },
    ],
  };

  render(
    <MemoryRouter>
      <CartContext.Provider value={value}>
        <NavBar />
      </CartContext.Provider>
    </MemoryRouter>,
  );

  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /shop/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
  expect(screen.getByText("5")).toBeInTheDocument();
});
