import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
  InputGroup,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IoSearchCircle } from "react-icons/io5";
import ItemsCards from "./ItemCards";
import "../styles/shop.css";

function Cart({ cart }) {
  return <h1>Cart{cart} </h1>;
}

function useInitialProducts() {
  const [initialItems, setInitialItems] = useState(null);
  const [initialError, setInitialError] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Server Error");
        }

        const data = await response.json();
        setInitialItems(data);
      } catch (error) {
        setInitialError(error.message);
      } finally {
        setInitialLoading(false);
      }
    };

    fetchData();
  }, []);

  return { initialItems, initialError, initialLoading };
}

function SearchInput(props) {
  return (
    <div>
      <Form onSubmit={props.handleSearchSubmit}>
        <InputGroup>
          <FloatingLabel controlId="searchInput" label="Search  product">
            <Form.Control
              type="search"
              placeholder="RTX 4090"
              value={props.search}
              onChange={(e) => props.handleSearchChange(e)}
            />
          </FloatingLabel>
          <Button type="submit" alt="Search">
            <IoSearchCircle style={{ height: "2rem", width: "2rem" }} alt="" />
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

function Shop() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(0);
  const { initialItems, initialError, initialLoading } = useInitialProducts();

  const handleSearchInputs = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  if (initialError) return <p>A network error was encountered</p>;
  if (initialLoading) return <p>Loading...</p>;
  return (
    <>
      <Container>
        <Row>
          <SearchInput
            search={search}
            handleSearchChange={handleSearchInputs}
            handleSearchSubmit={handleSearchSubmit}
          />
          <Cart cart={cart} />
        </Row>
        <Row>
          {initialItems.map((item) => (
            <Col md={3} key={item.id}>
              <ItemsCards
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

SearchInput.propTypes = {
  handleSearchChange: PropTypes.func,
  handleSearchSubmit: PropTypes.func,
  search: PropTypes.string,
};
export default Shop;
