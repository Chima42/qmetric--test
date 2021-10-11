import _ from "lodash";
import { render, fireEvent, screen } from "@testing-library/react";

import CartItems from "./CartItems";
import { data } from "./AvailableItemDataMock";

const props = {
  items: data,
  onRemove: _.noop,
};

it("displays the items in the cart", () => {
  render(<CartItems {...props} />);
  expect(screen.getAllByText("Beans")).toHaveLength(2);
  expect(screen.getAllByText(/^£0.50/)).toHaveLength(2);
  expect(screen.getAllByText("Eggs")).toHaveLength(1);
  expect(screen.getAllByText(/^£2.95/)).toHaveLength(1);
  expect(screen.queryByText("Oranges")).not.toBeInTheDocument();
});

it("displays the oranges in the cart in a single row", () => {
  render(<CartItems {...props} />);
  expect(screen.queryByText("Beans")).not.toBeInTheDocument();
  expect(screen.queryByText("Eggs")).not.toBeInTheDocument();
  expect(screen.getByText("Oranges")).toBeInTheDocument();
  expect(screen.getByText(/£1.99\/kg/)).toBeInTheDocument();
  expect(screen.getByText(/^£0.40/)).toBeInTheDocument();
});

it("removes beans on clicking the Remove Beans button", () => {
  const onRemoveItem = jest.fn();
  render(<CartItems {...props} onRemove={onRemoveItem} />);
  expect(screen.getAllByTitle("Remove Beans")).toHaveLength(2);

  fireEvent.click(screen.getAllByTitle("Remove Beans")[0]);
  expect(onRemoveItem).toHaveBeenCalledWith(0);
});

it("removes eggs on clicking the Remove Eggs button", () => {
  const onRemoveItem = jest.fn();
  render(<CartItems {...props} onRemove={onRemoveItem} />);
  expect(screen.getAllByTitle("Remove Eggs")).toHaveLength(1);

  fireEvent.click(screen.getAllByTitle("Remove Eggs")[0]);
  expect(onRemoveItem).toHaveBeenCalledWith(0);
});

it("removes oranges on clicking the Remove Oranges button", () => {
  const orangeItem = data.find(x => x.name === "Oranges");
  const onRemoveItem = jest.fn();
  render(<CartItems {...props} onRemove={onRemoveItem} />);
  expect(screen.getByTitle("Remove Oranges")).toBeInTheDocument();

  fireEvent.click(screen.getByTitle("Remove Oranges"));
  expect(onRemoveItem).toHaveBeenCalledWith(orangeItem?.id);
});
