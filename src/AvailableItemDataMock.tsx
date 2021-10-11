import { AvailableItemProps } from "./types/Item";

export const data: AvailableItemProps[] = [
  {
    name: "Beans",
    imageSrc: "/images/beans.svg",
    totalAddedToCart: 0,
    price: 0.50,
    description: "each",
    discounted: true,
    id: generateItemId(),
    savings: 0,
    weightType: "fixed",
    discount: "Three tins for the price of two"
  },
  {
    name: "Eggs",
    imageSrc: "/images/eggs.svg",
    totalAddedToCart: 0,
    discounted: false,
    price: 2.90,
    id: generateItemId(),
    savings: 0,
    description: "per dozen",
    weightType: "fixed"
  },
  {
    name: "Cola",
    imageSrc: "/images/cola.svg",
    discounted: true,
    totalAddedToCart: 0,
    price: 0.70,
    id: generateItemId(),
    savings: 0,
    description: "each",
    weightType: "fixed",
    discount: "Two cans for £1"
  },
  {
    name: "Milk",
    imageSrc: "/images/milk.svg",
    discounted: false,
    totalAddedToCart: 0,
    price: 0.55,
    id: generateItemId(),
    savings: 0,
    description: "(1 pint)",
    weightType: "fixed"
  },
  {
    name: "Pizza",
    discounted: true,
    imageSrc: "/images/pizza.svg",
    totalAddedToCart: 0,
    price: 2.20,
    id: generateItemId(),
    savings: 0,
    description: "each",
    weightType: "fixed",
    discount: "Three for £6"
  },
  {
    name: "Tea",
    imageSrc: "/images/tea.svg",
    discounted: false,
    totalAddedToCart: 0,
    price: 2.50,
    id: generateItemId(),
    savings: 0,
    description: "(80 bags)",
    weightType: "fixed"
  },
  {
    name: "Cereal",
    discounted: false,
    imageSrc: "/images/cereal.svg",
    id: generateItemId(),
    savings: 0,
    totalAddedToCart: 0,
    price: 1.40,
    description: "each",
    weightType: "fixed"
  },
  {
    name: "Bananas",
    imageSrc: "/images/bananas.svg",
    totalAddedToCart: 0,
    price: 0.85,
    id: generateItemId(),
    savings: 0,
    discounted: false,
    description: "/kg",
    weightType: "variable"
  },
  {
    name: "Lemons",
    discounted: false,
    imageSrc: "/images/lemons.svg",
    totalAddedToCart: 0,
    price: 1.40,
    id: generateItemId(),
    savings: 0,
    description: "/kg",
    weightType: "variable"
  },
  {
    name: "Oranges",
    discounted: false,
    imageSrc: "/images/oranges.svg",
    totalAddedToCart: 0,
    price: 1.99,
    id: generateItemId(),
    savings: 0,
    description: "/kg",
    weightType: "variable"
  }
];

function generateItemId() {
  return Math.floor(Math.random() * (9999 - 1000) + 1000);
}