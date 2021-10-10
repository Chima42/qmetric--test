import { render, fireEvent, screen } from "@testing-library/react";

import App from "./App";

it("renders the basic UI components", () => {
  render(<App />);
  expect(screen.getByText(/Your Shopping Cart/)).toBeInTheDocument();
  expect(screen.getByText(/Supermarket/)).toBeInTheDocument();
});

it("adds single items to the cart", () => {
  render(<App />);
  expect(screen.queryByText(/Total to Pay/)).not.toBeInTheDocument();

  fireEvent.click(screen.getByText("Add Beans"));
  expect(screen.getByText(/Total to Pay/)).toHaveTextContent("Total to Pay: £0.50");

  fireEvent.click(screen.getByText("Add Eggs"));
  expect(screen.getByText(/Total to Pay/)).toHaveTextContent("Total to Pay: £3.45");
});

it("removes items from the cart", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Add Beans"));
  expect(screen.getByText(/Total to Pay/)).toHaveTextContent("Total to Pay: £0.50");

  fireEvent.click(screen.getByTitle("Remove Beans"));
  expect(screen.queryByText(/Total to Pay/)).not.toBeInTheDocument();
});

it("displays a message when the cart is empty", () => {
  render(<App />);
  expect(screen.getByText(/Your shopping cart is empty/)).toBeInTheDocument();
});
