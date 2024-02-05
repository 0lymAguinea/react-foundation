import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./components/Header";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
function App() {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col xl={6}>
          <CVForm />
        </Col>
        <Col xl={6}>
          <CVPreview />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
