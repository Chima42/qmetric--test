import _ from "lodash";
import { Image, List, Button } from "semantic-ui-react";
import { ItemProps } from "./types/Item";

type CartItemProps = {
  item: ItemProps;
  onRemove: (id: number) => number;
};


const getKGDescription = (amountOfItem: number, value: number, itemInfo: string) => {
  return `£${((value * amountOfItem) / 100).toFixed(2)} (${amountOfItem}${itemInfo})`;
}

const CartItem = ({ item, onRemove }: CartItemProps) => {
  const {name, imageSrc, description, id} = item;
  
};

type CartItemsProps = {
  items: ItemProps[];
  onRemove: (id: number) => void;
};

const CartItems = ({ items, onRemove }: CartItemsProps) => (
  <List divided relaxed>
    {
      items.map((item) => {
        const {name, imageSrc, description, id, amount, weightType} = item;
        return _.range(amount || 0).map(() => (
          // <CartItem
          //   key={id}
          //   name={name}
          //   imageSrc={imageSrc}
          //   description={weightType === "variable" ? getKGDescription(amount, 199, "kg @ £1.99/kg") : description}
          //   onRemove={onRemove(id)}
          // />

          <List.Item>
            <Image src={imageSrc} size="mini" style={{ height: 50 }} />
            <List.Content>
              <List.Header>{name}</List.Header>
              <List.Description>{description}</List.Description>
            </List.Content>
            <List.Content floated="right" verticalAlign="bottom">
              <Button title={`Remove ${name}`} icon="trash" onClick={() => onRemove(id)} />
            </List.Content>
          </List.Item>
        ))
      })
    }

    {/* // {!!oranges && (
    //   <CartItem
    //     name="Oranges"
    //     imageSrc="/items/oranges.svg"
    //     description={`£${((199 * oranges) / 100).toFixed(2)} (${oranges}kg @ £1.99/kg)`}
    //     onRemove={() => onSetItem("oranges", oranges - 1)}
    //   />
    // )} */}
  </List>
);

export default CartItems;
