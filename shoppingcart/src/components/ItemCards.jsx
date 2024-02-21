import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "../styles/card.css";
function ItemsCards(props) {
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
        <Button type="button" className="float-right">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

ItemsCards.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

ItemsCards;
export default ItemsCards;
