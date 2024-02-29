import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import useCart from "./hooks/useCart";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import PropTypes, { oneOfType } from "prop-types";
function App() {
  const { cart, setCart, handleAddToCart, handleCartDelete } = useCart();

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
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                handleCartDelete={handleCartDelete}
              />
            }
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
