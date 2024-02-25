import { Container, Row, Col } from "react-bootstrap";
import "../styles/cart.css";

function ItemList({ item }) {
  const total = item.price * item.quantity;
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
        <p className="">Quantity: {item.quantity}</p>
        <p className="">Price: ${item.price}</p>
        <p>Total: ${total}</p>
      </Col>
    </Row>
  );
}

function Cart({ cart }) {
  console.log(cart);
  if (cart.length === 0) {
    return <h1>NO ITEMS</h1>;
  }
  return (
    <Container>
      <Row>
        <Col md={7}>
          {cart.map((item) => (
            <ItemList key={item.id} item={item} />
          ))}
        </Col>
        <Col md={5}>TOTAL</Col>
      </Row>
    </Container>
  );
}

export default Cart;
