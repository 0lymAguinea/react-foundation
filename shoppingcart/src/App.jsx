import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { createContext } from "react";
import useInitialProducts from "./hooks/useInitialProducts";
import useCart from "./hooks/useCart";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import PropTypes, { oneOfType } from "prop-types";
import { useQuery } from "@tanstack/react-query";
export const ShopContext = createContext({
  initialItems: [],
  initialLoading: null,
  initialError: null,
});

export const CartContext = createContext({
  cart: [],
  setCart: () => {},
  handleAddToCart: () => {},
  handleCartDelete: () => {},
});
function App() {
  const { cart, setCart, handleAddToCart, handleCartDelete } = useCart();

  const {
    data: initialItems,
    isLoading: initialLoading,
    isError: initialError,
  } = useQuery({ queryKey: ["items"], queryFn: useInitialProducts });

  return (
    <ShopContext.Provider
      value={{
        initialItems,
        initialLoading,
        initialError,
      }}
    >
      <CartContext.Provider
        value={{ cart, setCart, handleAddToCart, handleCartDelete }}
      >
        <Navbar />
        <Container fluid>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </CartContext.Provider>
    </ShopContext.Provider>
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
