import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/cart.css";
import useCounterInput from "../hooks/useCounterInput";

function ItemList({ item, setCart }) {
  const { itemCounter, handleCartCounter } = useCounterInput(
    item.quantity,
    setCart
  );

  const total = item.price * itemCounter;

  return (
    <Row className="my-4 itemCheckoutContainer border border-dark-subtle">
      <Col className="itemImageContainer my-2">
        <img
          src={item.image}
          className="float-start img-thumbnail cartImages me-2"
        />
      </Col>
      <Col>
        <p className="fs-5">{item.title}</p>
        <p className="">
          Quantity: {itemCounter}
          <Button
            type="button"
            onClick={() => handleCartCounter(item, "-")}
            disabled={itemCounter === 1}
            className="mx-1"
          >
            -
          </Button>
          <Button onClick={() => handleCartCounter(item, "+")}>+</Button>
        </p>
        <p className="">Price: ${item.price}</p>
        <p>Total: ${total}</p>
      </Col>
    </Row>
  );
}

function Cart({ cart, setCart }) {
  if (cart.length === 0) {
    return <h1>NO ITEMS</h1>;
  }
  return (
    <Container>
      <Row>
        <Col md={7}>
          {cart.map((item) => (
            <ItemList key={item.id} item={item} setCart={setCart} />
          ))}
        </Col>
        <Col md={5}>TOTAL</Col>
      </Row>
    </Container>
  );
}

export default Cart;
