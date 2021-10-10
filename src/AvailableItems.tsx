import { useState } from "react";
import { Button, Card, Form, Image, Input } from "semantic-ui-react";
import { ItemProps } from "./types/Item";

type Props = {
  onAddItem: (item: ItemProps) => void;
  items: ItemProps[]
};

const AvailableItems = ({ onAddItem, items }: Props) => {
  const [weight, setWeight] = useState("");
  const isValid = !!(weight && parseFloat(weight) && parseFloat(weight) > 0);

  return (
    <Card.Group centered>
      {
        items.map(item => (
          <Card>
            <Card.Content>
              <Image floated="right" src={`/items/${item.name.toLowerCase()}.svg`} style={{ height: 80, marginBottom: 0 }} />
              <Card.Header>{item.name}</Card.Header>
              <Card.Meta data-testid={`${item.name.toLowerCase()}-price`}>{item.description}</Card.Meta>
            </Card.Content>

            {
              item.discounted &&
              <Card.Content>
                <Card.Description>DISCOUNT:</Card.Description>
                <Card.Description>{item.discount}</Card.Description>
              </Card.Content>
            }

            {
              item.weightType === "variable" &&
              <Card.Content style={{ flexGrow: 0 }}>
                <Form>
                  <Form.Group>
                    <Form.Field>
                      <label>Weight</label>
                      <Input
                        value={weight}
                        onChange={(e) => setWeight(e.currentTarget.value)}
                        size="small"
                        label={{ basic: true, content: "kg" }}
                        labelPosition="right"
                        placeholder="Enter weight..."
                      />
                    </Form.Field>
                  </Form.Group>

                  <Form.Field>
                    <Button onClick={() => onAddItem(item)} disabled={!isValid}>
                      Add {item.name}
                    </Button>
                  </Form.Field>
                </Form>
              </Card.Content>
            }

            <Card.Content style={{ flexGrow: 0 }}>
              <Form>
                <Form.Field>
                  <Button onClick={() => onAddItem(item)}>Add Beans</Button>
                </Form.Field>
              </Form>
            </Card.Content>
          </Card>
        ))
      }

      <Card>
        <Card.Content>
          <Image floated="right" src="/items/oranges.svg" style={{ height: 80, marginBottom: 0 }} />
          <Card.Header>Oranges</Card.Header>
          <Card.Meta data-testid="oranges-price">£1.99/kg</Card.Meta>
        </Card.Content>


      </Card>
    </Card.Group>
  );
};

export default AvailableItems;
