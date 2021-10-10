import { render, screen } from "@testing-library/react";

import CartTotal from "./CartTotal";

const cart = {
  beans: 0,
  eggs: 0,
  oranges: 0,
};

it("displays totals", () => {
  render(<CartTotal cart={{ ...cart, beans: 6, eggs: 2, oranges: 0.4 }} />);
  expect(screen.getByText(/Sub-total:/)).toHaveTextContent("£9.70");
  expect(screen.getByText(/Total Savings:/)).toHaveTextContent("-£1.00");
  expect(screen.getByText(/Total to Pay:/)).toHaveTextContent("£8.70");
});
