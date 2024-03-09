import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../styles/cart.css";
import { MdDeleteForever } from "react-icons/md";
import useCounterInput from "../hooks/useCounterInput";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";
import PropTypes, { oneOfType } from "prop-types";

function Checkout() {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((accu, item) => {
    return accu + item.price * item.quantity;
  }, 0);
  return (
    <>
      <p className="fs-2 ms-4">Checkout</p>
      <ul className="pe-3">
        {cart.map((item) => (
          <li key={item.id} className="list-unstyled">
            <p>{item.title}</p>
            <p>{item.price * item.quantity}</p>
          </li>
        ))}
        <p>Total: ${totalPrice.toFixed(2)}</p>
      </ul>
    </>
  );
}

function ItemList({ item }) {
  const { setCart, handleCartDelete } = useContext(CartContext);
  const { itemCounter, handleCartCounter } = useCounterInput(
    item.quantity,
    setCart
  );

  const totalPrice = item.price * item.quantity;

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
          <Button
            onClick={() => handleCartCounter(item, "+")}
            disabled={itemCounter === 50}
          >
            +
          </Button>
        </p>
        <p className="">Price: ${item.price}</p>
        <p>Total: ${totalPrice}</p>
        <span>
          <Button variant="danger" onClick={() => handleCartDelete(item.id)}>
            <MdDeleteForever />
          </Button>
        </span>
      </Col>
    </Row>
  );
}

function Cart() {
  const { cart } = useContext(CartContext);
  if (cart.length === 0) {
    return (
      <div className="text-center my-5">
        <p className="fs-1">No items found</p>
        <Link to="/shop" className="fs-3">
          Start shopping
        </Link>
      </div>
    );
  }

  return (
    <Container>
      <Row>
        <Col md={7}>
          {cart.map((item) => (
            <ItemList key={item.id} item={item} />
          ))}
        </Col>
        <Col md={5}>
          <Card className="mt-4 checkoutCard">
            <Checkout />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;

ItemList.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    id: oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};
