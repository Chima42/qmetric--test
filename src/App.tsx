import { useState } from "react";
import { Grid, Header, Message } from "semantic-ui-react";

import AvailableItems from "./AvailableItems";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

const App = () => {
  const [cart, setCart] = useState<{ [itemId: string]: number }>({
    beans: 0,
    eggs: 0,
    oranges: 0,
  });
  const { beans, oranges, eggs } = cart;

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
            onAddItem={(itemId, quantity) =>
              setCart({ ...cart, [itemId]: cart[itemId] + quantity })
            }
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <Header as="h2">Your Shopping Cart</Header>
          {!beans && !eggs && !oranges ? (
            <Message info>
              <Message.Header>Your shopping cart is empty.</Message.Header>
              <p>Buy things!</p>
            </Message>
          ) : (
            <>
              <CartItems
                cart={cart}
                onSetItem={(itemId, quantity) => setCart({ ...cart, [itemId]: quantity })}
              />

              <CartTotal cart={cart} />
            </>
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default App;
