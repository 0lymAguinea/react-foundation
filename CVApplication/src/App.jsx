import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/CVPreview.css";

import Header from "./components/Header";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
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

  const handleChange = (inputName, value) => {
    setInputValue((prevValues) => ({
      ...prevValues,
      [inputName]: value,
    }));
  };

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col xl={5}>
          <CVForm inputValue={inputValue} handleChange={handleChange} />
        </Col>
        <Col xl={7} className="CVPreview">
          <CVPreview inputValue={inputValue} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
