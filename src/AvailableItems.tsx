import { Button, Card, Form, Image, Input } from "semantic-ui-react";
import { AvailableItemProps, IAvailableItemProps, IDiscountedItemProps, IVariableItemProps } from "./types/Item";

type Props = {
  onAddItem: (item: (IVariableItemProps | IAvailableItemProps | IDiscountedItemProps)) => void;
  items: (IVariableItemProps | IAvailableItemProps | IDiscountedItemProps)[]
  formatPriceAndDescription: (item: IVariableItemProps | IAvailableItemProps | IDiscountedItemProps) => string
};

const AvailableItems = ({ onAddItem, items, formatPriceAndDescription }: Props) => {
  // const [weight, setWeight] = useState("");
  // const isValid = !!(weight && parseFloat(weight) && parseFloat(weight) > 0);

  const setItemWeight = (value: String, itemId: number) => {
    items = items.map(x => {
      (x as IVariableItemProps).weightAdded = x.id === itemId ? Number(value) : (x as IVariableItemProps).weightAdded
      return x;
    })
  }

  return (
    <Card.Group centered>
      {
        items.map(item => (
          <Card key={item.id}>
            <Card.Content>
              <Image floated="right" src={item.imageSrc} style={{ height: 80, marginBottom: 0 }} />
              <Card.Header>{item.name}</Card.Header>
              <Card.Meta data-testid={`${item.name.toLowerCase()}-price`}>
                {formatPriceAndDescription(item)}
              </Card.Meta>
            </Card.Content>

            {
              (item as IDiscountedItemProps).discounted &&
                <Card.Content>
                  <Card.Description>DISCOUNT:</Card.Description>
                  <Card.Description>{(item as IDiscountedItemProps).discountLabel}</Card.Description>
                </Card.Content>
            }

            {
              (item as IVariableItemProps).weightType === "variable" ?
              <Card.Content style={{ flexGrow: 0 }}>
                <Form>
                  <Form.Group>
                    <Form.Field>
                      <label>Weight</label>
                      <Input
                        value={(item as IVariableItemProps).weightAdded}
                        onChange={(e) => setItemWeight(e.currentTarget.value, item.id)}
                        size="small"
                        label={{ basic: true, content: "kg" }}
                        labelPosition="right"
                        placeholder="Enter weight..."
                      />
                    </Form.Field>
                  </Form.Group>

                  <Form.Field>
                    <Button onClick={() => onAddItem((item as IVariableItemProps))} disabled={(item as IVariableItemProps).weightAdded > 0}>
                      Add {item.name}
                    </Button>
                  </Form.Field>
                </Form>
              </Card.Content> :
              <Card.Content style={{ flexGrow: 0 }}>
              <Form>
                <Form.Field>
                  <Button onClick={() => onAddItem(item)}>Add {item.name}</Button>
                </Form.Field>
              </Form>
            </Card.Content>
            }


          </Card>
        ))
      }
    </Card.Group>
  );
};

export default AvailableItems;
