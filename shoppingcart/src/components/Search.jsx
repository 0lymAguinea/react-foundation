import { Form, FloatingLabel, Button, InputGroup } from "react-bootstrap";
import { IoSearchCircle } from "react-icons/io5";
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
        <Button type="submit" aria-label="Search">
          <IoSearchCircle style={{ height: "2rem", width: "2rem" }} alt="" />
        </Button>
      </InputGroup>
    </Form>
  );
}
export default SearchInput;
