import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../App";

function Header() {
  const { cart } = useContext(CartContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="fs-1 brand">
            ShopHere
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        {windowWidth < 992 ? (
          <>
            <Link to="cart" aria-label="Cart pag" className="ms-2">
              <IoMdCart className="fs-2 my-auto position-relative" alt="" />
              <span className="position-absolute  translate-middle badge border border-light rounded-circle bg-danger p-2">
                {cart.length}
              </span>
            </Link>
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
          </>
        ) : (
          <>
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
            <Link to="cart" aria-label="Cart pag" className="ms-1">
              <IoMdCart className="fs-2 my-auto position-relative" alt="" />
              <span className="position-absolute  translate-middle badge border border-light rounded-circle bg-danger p-2">
                {cart.length}
              </span>
            </Link>
          </>
        )}
      </Container>
    </Navbar>
  );
}
export default Header;
