import { render, screen } from "@testing-library/react";
import { CartContext } from "../Context/CartContext";
import ShopPage from "../Components/ShopPage/ShopPage";

const mockProducts = [
  {
    id: 1,
    title: "Mock Product One",
    description: "Description one",
    category: "Category One",
    price: 10.5,
    image: "https://example.com/image-1.jpg",
  },
  {
    id: 2,
    title: "Mock Product Two",
    description: "Description two",
    category: "Category Two",
    price: 25.0,
    image: "https://example.com/image-2.jpg",
  },
];

test("fetches and renders products from the shop API", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProducts),
      }),
    ),
  );

  render(
    <CartContext.Provider value={{ addToCart: vi.fn() }}>
      <ShopPage />
    </CartContext.Provider>,
  );

  expect(await screen.findByText(/Mock Product One/i)).toBeInTheDocument();
  expect(await screen.findByText(/Mock Product Two/i)).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledWith(
    "https://fakestoreapi.com/products?sort=desc&limit=6",
  );
});
