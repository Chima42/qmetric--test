import _ from "lodash";
import { Image, List, Button } from "semantic-ui-react";

type CartItemProps = {
  name: string;
  description: string;
  imageSrc: string;
  onRemove: () => void;
};

const CartItem = ({ name, description, imageSrc, onRemove }: CartItemProps) => (
  <List.Item>
    <Image src={imageSrc} size="mini" style={{ height: 50 }} />
    <List.Content>
      <List.Header>{name}</List.Header>
      <List.Description>{description}</List.Description>
    </List.Content>
    <List.Content floated="right" verticalAlign="bottom">
      <Button title={`Remove ${name}`} icon="trash" onClick={onRemove} />
    </List.Content>
  </List.Item>
);

type CartItemsProps = {
  cart: { [itemId: string]: number };
  onSetItem: (itemId: string, quantity: number) => void;
};

const CartItems = ({ cart: { beans, eggs, oranges }, onSetItem }: CartItemsProps) => (
  <List divided relaxed>
    {_.range(beans || 0).map((i) => (
      <CartItem
        key={i}
        name="Beans"
        imageSrc="/items/beans.svg"
        description="£0.50"
        onRemove={() => onSetItem("beans", beans - 1)}
      />
    ))}

    {_.range(eggs || 0).map((i) => (
      <CartItem
        key={i}
        name="Eggs"
        imageSrc="/items/eggs.svg"
        description="£2.95 (dozen)"
        onRemove={() => onSetItem("eggs", eggs - 1)}
      />
    ))}

    {!!oranges && (
      <CartItem
        name="Oranges"
        imageSrc="/items/oranges.svg"
        description={`£${((199 * oranges) / 100).toFixed(2)} (${oranges}kg @ £1.99/kg)`}
        onRemove={() => onSetItem("oranges", oranges - 1)}
      />
    )}
  </List>
);

export default CartItems;
