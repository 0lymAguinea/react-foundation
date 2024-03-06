import { Container, Row, Col } from "react-bootstrap";
import PropTypes, { oneOfType } from "prop-types";
import ItemsCards from "./ItemCards";

import SearchInput from "./Search";
import ClipLoader from "react-spinners/ClipLoader";
import useSearchItems from "../hooks/useSearchItems";

function ItemColsCard({ item, handleAddToCart }) {
  return (
    <Col md={6} lg={3} className="mb-4">
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

function Shop({ initialItems, initialError, initialLoading, handleAddToCart }) {
  const { search, isSearch, handleSearchChange } = useSearchItems();

  const filteredItems = isSearch
    ? initialItems.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const spinnerCOLOR = "#d6290a";

  if (initialError)
    return <p className="fs-1 text-center">A network error was encountered</p>;
  if (initialLoading)
    return (
      <div className="text-center my-5">
        <ClipLoader
          color={spinnerCOLOR}
          size={170}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p className="fs-3">Loading...</p>
      </div>
    );
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
            {isSearch ? (
              filteredItems.length === 0 ? (
                <p className="fs-1 text-center">No items found</p>
              ) : (
                filteredItems.map((item) => (
                  <ItemColsCard
                    item={item}
                    handleAddToCart={handleAddToCart}
                    key={item.id}
                  />
                ))
              )
            ) : (
              initialItems.map((item) => (
                <ItemColsCard
                  item={item}
                  handleAddToCart={handleAddToCart}
                  key={item.id}
                />
              ))
            )}
          </Row>
        </main>
        <Row></Row>
      </Container>
    </>
  );
}
Shop.propTypes = {
  handleAddToCart: PropTypes.func,
  initialItems: PropTypes.array,
  initialLoading: PropTypes.bool,
  initialError: PropTypes.string,
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
  }).isRequired,
  handleAddToCart: PropTypes.func,
};
export default Shop;
