import { Row, Col } from "react-bootstrap";
function Cart({ cart }) {
  let colSize = 12;
  if (cart.length === 0) {
    return <h1>NO ITEMS</h1>;
  } else if (cart.length === 1) {
    colSize = 12;
  } else if (cart.length === 2) {
    colSize = 6;
  } else if (cart.length === 3) {
    colSize = 4;
  } else {
    colSize = 3;
  }

  return (
    <Row>
      {cart.map((product) => (
        <Col key={product.id} md={colSize}>
          {product.title} : Quantity {product.quantity}
        </Col>
      ))}
    </Row>
  );
}
export default Cart;
