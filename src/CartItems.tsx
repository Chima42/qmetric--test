import _ from "lodash";
import { Image, List, Button } from "semantic-ui-react";
import { AvailableItemProps, IAvailableItemProps, IDiscountedItemProps, IVariableItemProps } from "./types/Item";

type CartItemsProps = {
  items: (IVariableItemProps | IAvailableItemProps | IDiscountedItemProps)[];
  formatPriceAndDescription: (item: IVariableItemProps | IAvailableItemProps | IDiscountedItemProps) => string;
  onRemove: (id: number) => void;
};

const CartItems = ({ items, onRemove, formatPriceAndDescription }: CartItemsProps) => (
  <List divided relaxed>
    {
      items.map((item) => {
        const { name, imageSrc, id, totalAddedToCart } = item;
        return _.range(totalAddedToCart || 0).map((index) => {
          // <CartItem
          //   key={id}
          //   name={name}
          //   imageSrc={imageSrc}
          //   description={weightType === "variable" ? getKGDescription(amount, 199, "kg @ £1.99/kg") : description}
          //   onRemove={onRemove(id)}
          // />

          return <List.Item key={`${item.id}-${index}`}>
            <Image src={imageSrc} size="mini" style={{ height: 50 }} />
            <List.Content>
              <List.Header>{name}</List.Header>
              <List.Description>{formatPriceAndDescription(item)}</List.Description>
            </List.Content>
            <List.Content floated="right" verticalAlign="bottom">
              <Button title={`Remove ${name}`} icon="trash" onClick={() => onRemove(id)} />
            </List.Content>
          </List.Item>
      })
      })
    }
  </List>
);

export default CartItems;
