import { Card, Button, Row, InputGroup, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/card.css";

import { oneOfType } from "prop-types";
function ItemsCards(props) {
  let [itemCounter, setItemCounter] = useState(1);

  const handleCounterInput = (e) => {
    const inputValue = e.target.value;

    setItemCounter(inputValue);
  };

  const handleCounterIncrement = () => {
    setItemCounter(parseInt(itemCounter) + 1);
  };

  const handleCounterDecrement = () => {
    if (itemCounter > 1) {
      setItemCounter(itemCounter - 1);
    }
  };

  const itemInfo = {
    id: props.id,
    title: props.title,
    price: props.price,
    description: props.description,
    category: props.category,
    image: props.image,
    rating: props.rating,
    quantity: itemCounter,
  };
  return (
    <Card className="mb-4">
      <Card.Img
        src={props.image}
        style={{ width: "13rem" }}
        className="text-center mx-auto mt-3"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <span>$</span> {props.price}
        </Card.Text>
        <Row>
          <InputGroup>
            <Button onClick={handleCounterDecrement}>-</Button>
            <Form.Control
              id={props.id}
              type="number"
              value={itemCounter}
              min={1}
              max={50}
              onChange={(e) => handleCounterInput(e)}
            ></Form.Control>
            <Button onClick={handleCounterIncrement}>+</Button>
          </InputGroup>
          <Button
            type="button"
            className="float-right"
            onClick={() => props.handleAddToCart(itemInfo)}
            disabled={itemCounter === "" || itemCounter === "0"}
          >
            Add to Cart
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
}

ItemsCards.propTypes = {
  id: oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  category: PropTypes.string,
  rating: PropTypes.object,
  handleAddToCart: PropTypes.func,
  quantity: PropTypes.number,
};
export default ItemsCards;
