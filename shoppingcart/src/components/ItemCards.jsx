import { Card, Button, Row, InputGroup, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import useCounterInput from "../hooks/useCounterInput";
import "../styles/card.css";

import { oneOfType } from "prop-types";
function ItemsCards(props) {
  const {
    itemCounter,
    handleCounterInput,
    handleCounterIncrement,
    handleCounterDecrement,
  } = useCounterInput(1);

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
        alt={props.title}
        className="text-center mx-auto mt-3"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <span>$</span> {props.price}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <InputGroup>
          <Button
            onClick={handleCounterDecrement}
            alt="Decrement item quantity"
          >
            -
          </Button>
          <Form.Control
            id={props.id}
            type="number"
            value={itemCounter}
            min={1}
            max={50}
            onChange={(e) => handleCounterInput(e)}
            aria-label="Item quantity"
          ></Form.Control>
          <Button
            onClick={handleCounterIncrement}
            alt="Increment item quantity"
          >
            +
          </Button>
        </InputGroup>
        <Button
          type="button"
          className="float-right mt-3"
          onClick={() => props.handleAddToCart(itemInfo)}
          disabled={itemCounter === "" || itemCounter === "0"}
        >
          Add to Cart
        </Button>
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
