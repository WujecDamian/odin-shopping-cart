import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartContext } from "../Context/CartContext";
import ItemCard from "../Components/ShopPage/ItemCard/ItemCard";

const product = {
  id: 1,
  image: "https://example.com/image.jpg",
  title: "Test Product",
  description: "A sample description",
  category: "Test Category",
  price: 19.99,
};

test("updates quantity and calls addToCart with the selected quantity", async () => {
  const user = userEvent.setup();
  const addToCart = vi.fn();

  render(
    <CartContext.Provider value={{ addToCart }}>
      <ItemCard props={product} />
    </CartContext.Provider>,
  );

  const input = screen.getByRole("spinbutton");
  const plusButton = screen.getByRole("button", { name: "+" });
  const minusButton = screen.getByRole("button", { name: "-" });
  const addButton = screen.getByRole("button", { name: /add to cart/i });

  expect(input).toHaveValue(0);

  await user.click(plusButton);
  expect(input).toHaveValue(1);

  await user.click(minusButton);
  expect(input).toHaveValue(0);

  await user.clear(input);
  await user.type(input, "2");
  expect(input).toHaveValue(2);

  await user.click(addButton);
  expect(addToCart).toHaveBeenCalledWith({ product, quantity: 2 });
});
