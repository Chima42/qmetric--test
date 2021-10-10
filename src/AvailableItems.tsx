import { useState } from "react";
import { Button, Card, Form, Image, Input } from "semantic-ui-react";

type Props = {
  onAddItem: (itemId: string, quantity: number) => void;
};

const AvailableItems = ({ onAddItem }: Props) => {
  const [weight, setWeight] = useState("");
  const isValid = !!(weight && parseFloat(weight) && parseFloat(weight) > 0);

  return (
    <Card.Group centered>
      <Card>
        <Card.Content>
          <Image floated="right" src="/items/beans.svg" style={{ height: 80, marginBottom: 0 }} />
          <Card.Header>Beans</Card.Header>
          <Card.Meta data-testid="beans-price">50p each</Card.Meta>
        </Card.Content>

        <Card.Content>
          <Card.Description>DISCOUNT:</Card.Description>
          <Card.Description>Three tins for the price of two</Card.Description>
        </Card.Content>

        <Card.Content style={{ flexGrow: 0 }}>
          <Form>
            <Form.Field>
              <Button onClick={() => onAddItem("beans", 1)}>Add Beans</Button>
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Image floated="right" src="/items/eggs.svg" style={{ height: 80, marginBottom: 0 }} />
          <Card.Header>Eggs</Card.Header>
          <Card.Meta data-testid="eggs-price">£2.90 per dozen</Card.Meta>
        </Card.Content>

        <Card.Content style={{ flexGrow: 0 }}>
          <Form>
            <Form.Field>
              <Button onClick={() => onAddItem("eggs", 1)}>Add Eggs</Button>
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Image floated="right" src="/items/oranges.svg" style={{ height: 80, marginBottom: 0 }} />
          <Card.Header>Oranges</Card.Header>
          <Card.Meta data-testid="oranges-price">£1.99/kg</Card.Meta>
        </Card.Content>

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
              <Button onClick={() => onAddItem("oranges", parseFloat(weight))} disabled={!isValid}>
                Add Oranges
              </Button>
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default AvailableItems;
