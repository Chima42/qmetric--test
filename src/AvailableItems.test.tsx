import _ from "lodash";
import { render, fireEvent, screen } from "@testing-library/react";

import AvailableItems from "./AvailableItems";

const props = {
  onAddItem: _.noop,
};

it("displays the available items", () => {
  render(<AvailableItems {...props} />);
  expect(screen.getByText("Add Beans")).toBeInTheDocument();
  expect(screen.getByTestId("beans-price").textContent).toEqual("50p each");
  expect(screen.getByText(/Three tins for the price of two/)).toBeInTheDocument();

  expect(screen.getByText("Eggs")).toBeTruthy();
  expect(screen.getByText("Add Eggs")).toBeTruthy();

  expect(screen.queryByText(/^Oranges$/)).toBeInTheDocument();
  expect(screen.getByTestId("oranges-price").textContent).toEqual("£1.99/kg");
  expect(screen.queryByText(/Weight/)).toBeInTheDocument();
});

it("adds beans", () => {
  const onAddItem = jest.fn();
  render(<AvailableItems {...props} onAddItem={onAddItem} />);
  expect(onAddItem).not.toHaveBeenCalled();

  fireEvent.click(screen.getByText("Add Beans"));
  expect(onAddItem).toHaveBeenCalledWith("beans", 1);
});

it("activates the Add Oranges button on a non-zero value", () => {
  render(<AvailableItems {...props} />);
  expect(screen.getByText("Add Oranges")).toBeInTheDocument();
  expect((screen.getByText("Add Oranges") as HTMLButtonElement).disabled).toBe(true);

  fireEvent.change(screen.getByPlaceholderText(/Enter weight.../), {
    target: { value: 23 },
  });
  expect((screen.getByText("Add Oranges") as HTMLButtonElement).disabled).toBe(false);
});

it("adds the entered number of oranges", () => {
  const onAddItem = jest.fn();
  render(<AvailableItems {...props} onAddItem={onAddItem} />);

  fireEvent.change(screen.getByPlaceholderText(/Enter weight.../), {
    target: { value: 33 },
  });
  fireEvent.click(screen.getByText("Add Oranges"));

  expect(onAddItem).toHaveBeenCalledWith("oranges", 33);
});

it("ignores invalid numbers of oranges", async () => {
  const onAddItem = jest.fn();
  render(<AvailableItems {...props} onAddItem={onAddItem} />);
  expect((screen.getByText("Add Oranges") as HTMLButtonElement).disabled).toBe(true);

  fireEvent.change(screen.getByPlaceholderText(/Enter weight.../), {
    target: { value: 33 },
  });
  expect((screen.getByText("Add Oranges") as HTMLButtonElement).disabled).toBe(false);

  fireEvent.change(screen.getByPlaceholderText(/Enter weight.../), {
    target: { value: "Not a number" },
  });
  expect((screen.getByText("Add Oranges") as HTMLButtonElement).disabled).toBe(true);
});
