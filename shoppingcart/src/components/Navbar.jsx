import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

function Header(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="fs-1 brand">
            ShopHere
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center text-center">
            <Link to="/" className="fs-2 nav-link">
              Home
            </Link>
            <Link to="shop" className="fs-2 nav-link">
              Shop
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="cart">
          <IoMdCart className="fs-2 my-auto" />
        </Link>
        <span>{props.cart.length}</span>
      </Container>
    </Navbar>
  );
}
export default Header;
