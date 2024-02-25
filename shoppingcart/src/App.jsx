import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import PropTypes, { oneOfType } from "prop-types";
function App() {
  const [cart, setCart] = useState([]);
  const [productId, setProductId] = useState([]);

  const handleAddToCart = (props) => {
    const newItem = {
      id: props.id,
      title: props.title,
      price: props.price,
      description: props.description,
      category: props.category,
      image: props.image,
      rating: props.rating,
      quantity: props.quantity,
    };
    if (productId.includes(newItem.id)) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) =>
          item.id === newItem.id
            ? {
                ...item,
                quantity: Number(item.quantity) + Number(newItem.quantity),
              }
            : item
        );
        return updatedCart;
      });
    } else {
      setProductId((prevIds) => [...prevIds, newItem.id]);
      setCart((prevItem) => [...prevItem, newItem]);
    }
  };

  return (
    <>
      <Navbar cart={cart} />
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Container>
    </>
  );
}

App.propTypes = {
  id: oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  category: PropTypes.string,
  rating: PropTypes.object,
  quantity: PropTypes.number,
};

export default App;
