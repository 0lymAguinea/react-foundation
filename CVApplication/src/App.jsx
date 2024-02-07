import { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./styles/CVPreview.css";

import Header from "./components/Header";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import { useReactToPrint } from "react-to-print";
function App() {
  const [inputValue, setInputValue] = useState({
    // Personal information
    firstName: "",
    lastName: "",
    emailAddress: "",
    mobileNumber: "",
    github: "",
    // Technical skills
    languages: "",
    technologiesFrameworks: "",
    developerTools: "",
    projectManagement: "",
    // Education
    universityName: "",
    yearStart: "",
    yearGraduate: "",
    degreeName: "",
    majorName: "",
    // Work experience
    companyName: "",
    position: "",
    achievements: "",
    workDurationFrom: "",
    workDurationUntil: "",
  });

  const ref = useRef();

  const handleChange = (inputName, value) => {
    setInputValue((prevValues) => ({
      ...prevValues,
      [inputName]: value,
    }));
  };

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col xl={5} className="mb-4">
          <CVForm inputValue={inputValue} handleChange={handleChange} />
        </Col>
        <Col xl={7} className="CVPreview">
          <CVPreview inputValue={inputValue} ref={ref} />
          <Button variant="success" onClick={handlePrint}>
            PRINT TO PDF
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
