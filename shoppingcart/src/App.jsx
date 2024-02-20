import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
