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
import useInitialProducts from "../hooks/useInitialProducts";
import "../styles/shop.css";

function Cart({ cart }) {
  return <h1>Cart{cart} </h1>;
}

function SearchInput(props) {
  return (
    <Form className="mt-3">
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
  );
}
function ItemColsCard({ item }) {
  return (
    <Col md={3}>
      <ItemsCards
        title={item.title}
        price={item.price}
        description={item.description}
        category={item.category}
        image={item.image}
      />
    </Col>
  );
}

function Shop() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const { initialItems, initialError, initialLoading } = useInitialProducts();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search === "") {
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }
  }, [search]);

  if (initialError) return <p>A network error was encountered</p>;
  if (initialLoading) return <p>Loading...</p>;
  return (
    <>
      <Container>
        <Row>
          <SearchInput
            search={search}
            handleSearchChange={handleSearchChange}
          />
          <Cart cart={cart} />
        </Row>
        <Row>
          {isSearch
            ? initialItems
                .filter((item) =>
                  item.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((item) => <ItemColsCard item={item} key={item.id} />)
            : initialItems.map((item) => (
                <ItemColsCard item={item} key={item.id} />
              ))}
        </Row>
        <Row></Row>
      </Container>
    </>
  );
}

SearchInput.propTypes = {
  handleSearchChange: PropTypes.func,
  handleSearchSubmit: PropTypes.func,
  search: PropTypes.string,
};

ItemColsCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
export default Shop;
