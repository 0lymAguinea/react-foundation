import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "../styles/card.css";
import { oneOfType } from "prop-types";
function ItemsCards(props) {
  const itemInfo = [
    props.id,
    props.title,
    props.price,
    props.description,
    props.category,
    props.image,
    props.rating,
  ];
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
        <Button
          type="button"
          className="float-right"
          onClick={() => props.handleAddToCart(itemInfo)}
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
};

ItemsCards;
export default ItemsCards;
