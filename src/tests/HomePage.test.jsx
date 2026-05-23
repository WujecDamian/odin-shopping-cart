import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";

test("renders home page with heading and shop link", () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  expect(
    screen.getByRole("heading", { name: /Rowan Calder/i }),
  ).toBeInTheDocument();
  const link = screen.getByRole("link", { name: /Discover Rowan Calder/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", expect.stringContaining("shop"));
});
