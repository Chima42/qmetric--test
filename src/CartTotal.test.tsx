import { render, screen } from "@testing-library/react";
import { data } from "./AvailableItemDataMock";

import CartTotal from "./CartTotal";


it("displays totals", () => {
  render(<CartTotal items={data} />);
  expect(screen.getByText(/Sub-total:/)).toHaveTextContent("£9.70");
  expect(screen.getByText(/Total Savings:/)).toHaveTextContent("-£1.00");
  expect(screen.getByText(/Total to Pay:/)).toHaveTextContent("£8.70");
});
