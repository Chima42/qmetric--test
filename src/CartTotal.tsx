import _ from "lodash";
import { List, Header } from "semantic-ui-react";
import { AvailableItemProps } from "./types/Item";

type DiscountAvailableItemProps = {
  description: string;
  saving: number;
};

const DiscountItem = ({ description, saving }: DiscountAvailableItemProps) => (
  <List.Item>
    <List.Content>
      <List.Header>{description}</List.Header>
      <List.Description>{`-£${saving.toFixed(2)}`}</List.Description>
    </List.Content>
  </List.Item>
);

type CartTotalProps = {
  items: AvailableItemProps[]
};

const CartTotal = ({ items }: CartTotalProps) => {
  const subtotal = items.map(item => item.price * item.totalAddedToCart).reduce((previousPrice, currentPrice) => previousPrice + currentPrice);
  const discountedItems = items.filter(item => item.discounted);
  discountedItems.forEach(item => {
    item.savings = Math.round(item.totalAddedToCart / 3) * item.price
  });
  const totalSavings = discountedItems.reduce((a,b) => a + b.savings, 0);

  
  return (
    <>
      <Header as="h3">{`Sub-total: £${subtotal.toFixed(2)}`}</Header>
      {totalSavings && (
        <>
          <Header as="h2">Awesome Discounts</Header>

          {
            discountedItems.map(item => {
              return <List divided relaxed>
                {_.range(Math.floor(item.totalAddedToCart / 3)).map((i) => (
                  <DiscountItem
                    key={i}
                    description={`${item.name}: ${item.discount}`}
                    saving={item.savings ? item.savings : 0}
                  />
                ))}
              </List>
            })
          }


          <Header as="h3">{`Total Savings: -£${totalSavings.toFixed(2)}`}</Header>
        </>
      )}

      <Header as="h2">{`Total to Pay: £${(subtotal - totalSavings).toFixed(2)}`}</Header>
    </>
  );
};

export default CartTotal;
