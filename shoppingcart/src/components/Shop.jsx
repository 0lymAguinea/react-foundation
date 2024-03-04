import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import PropTypes, { oneOfType } from "prop-types";
import ItemsCards from "./ItemCards";
import useInitialProducts from "../hooks/useInitialProducts";
import SearchInput from "./Search";

function ItemColsCard({ item, handleAddToCart }) {
  return (
    <Col md={3}>
      <ItemsCards
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
        category={item.category}
        image={item.image}
        rating={item.rating}
        quantity={1}
        handleAddToCart={handleAddToCart}
      />
    </Col>
  );
}

function Shop({ handleAddToCart }) {
  const [search, setSearch] = useState("");
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
        </Row>
        <main className="mt-5">
          <Row>
            {isSearch
              ? initialItems
                  .filter((item) =>
                    item.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((item) => (
                    <ItemColsCard
                      item={item}
                      handleAddToCart={handleAddToCart}
                      key={item.id}
                    />
                  ))
              : initialItems.map((item) => (
                  <ItemColsCard
                    item={item}
                    handleAddToCart={handleAddToCart}
                    key={item.id}
                  />
                ))}
          </Row>
        </main>
        <Row></Row>
      </Container>
    </>
  );
}
Shop.propTypes = {
  handleAddToCart: PropTypes.func,
};

SearchInput.propTypes = {
  handleSearchChange: PropTypes.func,
  handleSearchSubmit: PropTypes.func,
  search: PropTypes.string,
};

ItemColsCard.propTypes = {
  item: PropTypes.shape({
    id: oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.object,
    handleAddToCart: PropTypes.func,
  }).isRequired,
};
export default Shop;
