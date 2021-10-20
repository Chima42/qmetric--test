import { useState } from "react";
import { Grid, Header, Message } from "semantic-ui-react";

import AvailableItems from "./AvailableItems";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import { IAvailableItemProps, IDiscountedItemProps, IVariableItemProps } from "./types/Item";

const App = () => {
  const [items, updateItems] = useState<(IVariableItemProps | IAvailableItemProps | IDiscountedItemProps)[]>([
    {
      name: "Beans",
      imageSrc: "/items/beans.svg",
      totalAddedToCart: 0,
      price: 0.50,
      description: "each",
      discounted: true,
      id: generateItemId(),
      savingPerItem: 0.50,
      totalSavings: 0,
      weightType: "fixed",
      discountLabel: "Three tins for the price of two",
      discount: (addedToCart: number, multiplier: number, savingPerItem: number) => Math.floor(addedToCart / multiplier) * savingPerItem,
      cartId: "0",
      multiplier: 3
    },
    {
      name: "Eggs",
      imageSrc: "/items/eggs.svg",
      totalAddedToCart: 0,
      discounted: false,
      price: 2.90,
      id: generateItemId(),
      savingPerItem: 0,
      totalSavings: 0,
      description: "per dozen",
      weightType: "fixed",
      cartId: "0",
      multiplier: 1
    },
    {
      name: "Cola",
      imageSrc: "/items/cola.svg",
      discounted: true,
      totalAddedToCart: 0,
      price: 0.70,
      savingPerItem: 0.40,
      totalSavings: 0,
      id: generateItemId(),
      description: "each",
      weightType: "fixed",
      discountLabel: "Two cans for £1",
      discount: (addedToCart: number, multiplier: number, savingPerItem: number) => Math.floor(addedToCart / multiplier) * savingPerItem,
      cartId: "0",
      multiplier: 2
    },
    {
      name: "Milk",
      imageSrc: "/items/milk.svg",
      discounted: false,
      totalAddedToCart: 0,
      price: 0.55,
      id: generateItemId(),
      savingPerItem: 0,
      totalSavings: 0,
      description: "(1 pint)",
      weightType: "fixed",
      cartId: "0",
      multiplier: 1
    },
    {
      name: "Pizza",
      discounted: true,
      imageSrc: "/items/pizza.svg",
      totalAddedToCart: 0,
      price: 2.20,
      id: generateItemId(),
      savingPerItem: 0.60,
      totalSavings: 0,
      description: "each",
      weightType: "fixed",
      discountLabel: "Three for £6",
      discount: (addedToCart: number, multiplier: number, savingPerItem: number) => Math.floor(addedToCart / multiplier) * savingPerItem,
      cartId: "0",
      multiplier: 3
    },
    {
      name: "Tea",
      imageSrc: "/items/tea.svg",
      discounted: false,
      totalAddedToCart: 0,
      price: 2.50,
      id: generateItemId(),
      savingPerItem: 0,
      totalSavings: 0,
      description: "(80 bags)",
      weightType: "fixed",
      cartId: "0",
      multiplier: 1
    },
    {
      name: "Cereal",
      discounted: false,
      imageSrc: "/items/cereal.svg",
      id: generateItemId(),
      savingPerItem: 0,
      totalSavings: 0,
      totalAddedToCart: 0,
      price: 1.40,
      description: "each",
      weightType: "fixed",
      cartId: "0",
      multiplier: 1
    },
    {
      name: "Bananas",
      imageSrc: "/items/bananas.svg",
      totalAddedToCart: 0,
      price: 0.85,
      id: generateItemId(),
      savingPerItem: 0,
      totalSavings: 0,
      discounted: false,
      description: "/kg",
      weightType: "variable",
      cartId: "0",
      multiplier: 1
    },
    {
      name: "Lemons",
      discounted: false,
      imageSrc: "/items/lemons.svg",
      totalAddedToCart: 0,
      price: 1.40,
      id: generateItemId(),
      savingPerItem: 0,
      totalSavings: 0,
      description: "/kg",
      weightType: "variable",
      cartId: "0",
      multiplier: 1
    },
    {
      name: "Oranges",
      discounted: false,
      imageSrc: "/items/oranges.svg",
      totalAddedToCart: 0,
      price: 1.99,
      id: generateItemId(),
      savingPerItem: 0,
      totalSavings: 0,
      description: "/kg",
      weightType: "variable",
      cartId: "0",
      multiplier: 1
    }
  ]);

  const isCartEmpty = () => {
    return items.every(item => item.totalAddedToCart === 0);
  }

  function generateItemId() {
    return Math.floor(Math.random() * (9999 - 1000) + 1000);
  }

  const formatPriceAndDescription = (item: IVariableItemProps | IAvailableItemProps | IDiscountedItemProps) => {
    const { price, description} = item;
    if (price < 1) {
      if ((item as IVariableItemProps).weightType === "variable")
        return `${price.toFixed(2).replace(/^0./, "")}p${description}`;
      return `${price.toFixed(2).replace(/^0./, "")}p ${description}`;
    }
    if ((item as IVariableItemProps).weightType === "variable")
      return `£${price.toFixed(2)}${description}`
    else 
      return `£${price.toFixed(2)} ${description}`
  }

  return (
    <Grid padded celled="internally">
      <Grid.Row>
        <Grid.Column>
          <Header as="h1">Supermarket</Header>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={10}>
          <AvailableItems
            formatPriceAndDescription={formatPriceAndDescription}
            onAddItem={(selectedItem) => {
              updateItems(
                items.map(item => {
                  if (item.id === selectedItem.id) {
                    (item as IVariableItemProps).weightAdded = (selectedItem as IVariableItemProps).weightAdded;
                    item.totalAddedToCart = item.totalAddedToCart + 1;
                  }
                  return item;
                })
              )
            }
            }
            items={items}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <Header as="h2">Your Shopping Cart</Header>
          {isCartEmpty() ? (
            <Message info>
              <Message.Header>Your shopping cart is empty.</Message.Header>
              <p>Buy things!</p>
            </Message>
          ) : (
            <>
              <CartItems
                items={items.filter(item => item.totalAddedToCart !== 0)}
                formatPriceAndDescription={formatPriceAndDescription}
                onRemove={(id: number) => {
                  updateItems(items.map(item => {
                    if (id === item.id)
                      item.totalAddedToCart = item.totalAddedToCart - 1;
                    return item;
                  }))
                }}
              />

              <CartTotal items={items.filter(item => item.totalAddedToCart !== 0)} />
            </>
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default App;
