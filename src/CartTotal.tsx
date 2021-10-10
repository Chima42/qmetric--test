import _ from "lodash";
import { List, Header } from "semantic-ui-react";

type DiscountItemProps = {
  description: string;
  saving: number;
};

const DiscountItem = ({ description, saving }: DiscountItemProps) => (
  <List.Item>
    <List.Content>
      <List.Header>{description}</List.Header>
      <List.Description>{`-£${(saving / 100).toFixed(2)}`}</List.Description>
    </List.Content>
  </List.Item>
);

type CartTotalProps = {
  cart: { [itemId: string]: number };
};

const CartTotal = ({ cart: { beans, eggs, oranges } }: CartTotalProps) => {
  const subtotal = beans * 50 + eggs * 295 + oranges * 199;
  const savings = Math.round(beans / 3) * 50;

  return (
    <>
      <Header as="h3">{`Sub-total: £${(subtotal / 100).toFixed(2)}`}</Header>

      {savings && (
        <>
          <Header as="h2">Awesome Discounts</Header>

          <List divided relaxed>
            {_.range(Math.floor(beans / 3)).map((i) => (
              <DiscountItem
                key={i}
                description="Beans: Three tins for the price of two"
                saving={50}
              />
            ))}
          </List>

          <Header as="h3">{`Total Savings: -£${(savings / 100).toFixed(2)}`}</Header>
        </>
      )}

      <Header as="h2">{`Total to Pay: £${((subtotal - savings) / 100).toFixed(2)}`}</Header>
    </>
  );
};

export default CartTotal;
