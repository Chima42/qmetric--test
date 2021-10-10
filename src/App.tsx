import { useState } from "react";
import { Grid, Header, Message } from "semantic-ui-react";

import AvailableItems from "./AvailableItems";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import { ItemProps } from "./types/Item";

const App = () => {
  const [items, updateItems] = useState<ItemProps[]>([
    {
      name: "Beans",
      imageSrc: "/images/beans.svg",
      amount: 0,
      description: "50p each",
      discounted: true,
      id: generateItemId(),
      weightType: "fixed",
      discount: "Three tins for the price of two"
    },
    {
      name: "Eggs",
      imageSrc: "/images/eggs.svg",
      amount: 0,
      discounted: false,
      id: generateItemId(),
      description: "£2.90 per dozen",
      weightType: "fixed"
    },
    {
      name: "Cola",
      imageSrc: "/images/cola.svg",
      discounted: true,
      amount: 0,
      id: generateItemId(),
      description: "70p",
      weightType: "fixed",
      discount: "Two cans for £1"
    },
    {
      name: "Milk",
      imageSrc: "/images/milk.svg",
      discounted: false,
      amount: 0,
      id: generateItemId(),
      description: "55p (1 pint)",
      weightType: "fixed"
    },
    {
      name: "Pizza",
      discounted: true,
      imageSrc: "/images/pizza.svg",
      amount: 0,
      id: generateItemId(),
      description: "£2.20",
      weightType: "fixed",
      discount: "Three for £6"
    },
    {
      name: "Tea",
      imageSrc: "/images/tea.svg",
      discounted: false,
      amount: 0,
      id: generateItemId(),
      description: "£2.50 (80 bags)",
      weightType: "fixed"
    },
    {
      name: "Cereal",
      discounted: false,
      imageSrc: "/images/cereal.svg",
      id: generateItemId(),
      amount: 0,
      description: "£1.40",
      weightType: "fixed"
    },
    {
      name: "Bananas",
      imageSrc: "/images/bananas.svg",
      amount: 0,
      id: generateItemId(),
      discounted: false,
      description: "85p/kg",
      weightType: "variable"
    },
    {
      name: "Lemons",
      discounted: false,
      imageSrc: "/images/lemons.svg",
      amount: 0,
      id: generateItemId(),
      description: "£1.40/kg",
      weightType: "variable"
    },
    {
      name: "Oranges",
      discounted: false,
      imageSrc: "/images/oranges.svg",
      amount: 0,
      id: generateItemId(),
      description: "£1.99/kg",
      weightType: "variable"
    }
  ]);

  const [cart, updateCart] = useState<ItemProps[]>([]);

  const isCartEmpty = () => {
    return items.every(item => item.amount === 0);
  }

  function generateItemId() {
    return Math.floor(Math.random() * (9999 - 1000) + 1000);
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
            onAddItem={(selectedItem) => {
              updateItems(
                items.map(item => {
                  if (item.id === selectedItem.id)
                    item.amount = item.amount + 1;
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
                items={items.filter(item => item.amount !== 0)}
                onRemove={(id: number) => {
                  updateItems(items.map(item => {
                    if (id === item.id)
                      item.amount = item.amount - 1;
                    return item;
                  }))
                }}
              />

              <CartTotal tems={tems} />
            </>
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default App;
