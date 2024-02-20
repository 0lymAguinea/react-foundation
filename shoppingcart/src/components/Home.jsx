import { Link } from "react-router-dom";
import "../styles/home.css";
import { Button } from "react-bootstrap";
import { IoEnter } from "react-icons/io5";

function Home() {
  return (
    <main className="">
      <h1 className="">
        Welcome to <span className="brand">ShopHere</span>
      </h1>
      <p className="fs-5 ">
        {" "}
        Where Every Click Leads to a Happy Checkout! Discover the Joy of
        Seamless Shopping Today!
      </p>
      <Link to="shop" className="">
        <Button type="button" className="">
          Start shopping
          <IoEnter className="ms-2" />{" "}
        </Button>
      </Link>
    </main>
  );
}
export default Home;
