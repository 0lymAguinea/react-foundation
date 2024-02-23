import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (props) => {
    setCart([...cart, props]);
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
        </Routes>
      </Container>
    </>
  );
}

export default App;
