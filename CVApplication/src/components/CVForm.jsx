/* eslint-disable react/prop-types */
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import "../styles/CVForm.css";
import { useState } from "react";

function SectionTitle({ title }) {
  return <h3 className="sectionTitle">{title}</h3>;
}

function CreateFormLabel({ label }) {
  return <Form.Label className="label">{label}</Form.Label>;
}

function CreateFormInput({
  inputType,
  label,
  inputValue,
  handleChange,
  as,
  pattern,
}) {
  return (
    <>
      <Form.Control
        type={inputType}
        placeholder={label}
        value={inputValue}
        onChange={handleChange}
        as={as}
        pattern={pattern}
        required
      ></Form.Control>
    </>
  );
}

function CreateFormGroup({
  inputType,
  label,
  inputValue,
  handleChange,
  groupID,
  feedbackMessage,
  as,
  pattern,
}) {
  return (
    <Form.Group controlId={groupID}>
      <CreateFormLabel label={label} />
      <CreateFormInput
        inputType={inputType}
        label={label}
        inputValue={inputValue}
        handleChange={handleChange}
        as={as}
        pattern={pattern}
      />
      <Form.Control.Feedback type="invalid">
        {feedbackMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

function CreateForm({ title, inputValue, handleChange }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <SectionTitle title={title[0]} />
      <section>
        <CreateFormGroup
          inputType="text"
          label="First name"
          inputValue={inputValue.firstName}
          handleChange={(e) => handleChange("firstName", e.target.value)}
          groupID="firstName"
          feedbackMessage="Please enter your first name."
        />
        <CreateFormGroup
          inputType="text"
          label="Last name"
          inputValue={inputValue.lastName}
          handleChange={(e) => handleChange("lastName", e.target.value)}
          groupID="lastName"
          feedbackMessage="Please enter your last name."
        />
        <CreateFormGroup
          inputType="email"
          label="Email address"
          inputValue={inputValue.emailAddress}
          handleChange={(e) => handleChange("emailAddress", e.target.value)}
          groupID="emailAddress"
          feedbackMessage="Please enter a valid email address."
        />
        <CreateFormGroup
          inputType="tel"
          label="Mobile number"
          inputValue={inputValue.mobileNumber}
          handleChange={(e) => handleChange("mobileNumber", e.target.value)}
          groupID="mobileNumber"
          feedbackMessage="Please enter a valid mobile number."
          pattern="^\d{4,13}$"
        />
        <CreateFormGroup
          inputType="text"
          label="GitHub"
          inputValue={inputValue.github}
          handleChange={(e) => handleChange("github", e.target.value)}
          groupID="github"
          feedbackMessage="Please enter your GitHub username."
        />
      </section>

      <SectionTitle title={[title[1]]} />
      <section>
        <CreateFormGroup
          inputType="text"
          label="Programming languages"
          inputValue={inputValue.languages}
          handleChange={(e) => handleChange("languages", e.target.value)}
          groupID="languages"
          feedbackMessage="Please list the programming languages you know."
        />
        <CreateFormGroup
          inputType="text"
          label="Technoligies / Framework"
          inputValue={inputValue.technologiesFrameworks}
          handleChange={(e) =>
            handleChange("technologiesFrameworks", e.target.value)
          }
          groupID="technologiesFrameworks"
          feedbackMessage="Please list the technologies or frameworks you are familiar with."
        />
        <CreateFormGroup
          inputType="text"
          label="Developer tools"
          inputValue={inputValue.developerTools}
          handleChange={(e) => handleChange("developerTools", e.target.value)}
          groupID="developerTools"
          feedbackMessage="Please list the developer tools you use."
        />
        <CreateFormGroup
          inputType="text"
          label="Project management"
          inputValue={inputValue.projectManagement}
          handleChange={(e) =>
            handleChange("projectManagement", e.target.value)
          }
          groupID="projectManagement"
          feedbackMessage="Please list the project management tools you are experienced with."
        />
      </section>

      <SectionTitle title={[title[2]]} />
      <section>
        <CreateFormGroup
          inputType="text"
          label="University"
          inputValue={inputValue.universityName}
          handleChange={(e) => handleChange("universityName", e.target.value)}
          groupID="universityName"
          feedbackMessage="Please enter the name of your university."
        />
        <Row>
          <Col>
            <CreateFormGroup
              inputType="month"
              label="School year start"
              inputValue={inputValue.graduateYear}
              handleChange={(e) => handleChange("yearStart", e.target.value)}
              groupID="yearStart"
              feedbackMessage="Please enter the start year of your education."
            />
          </Col>
          <Col>
            <CreateFormGroup
              inputType="month"
              label="School year graduate"
              inputValue={inputValue.graduateYear}
              handleChange={(e) => handleChange("yearGraduate", e.target.value)}
              groupID="yearGraduate"
              feedbackMessage="Please enter the end year of your education."
            />
          </Col>
        </Row>
        <CreateFormGroup
          inputType="text"
          label="Degree"
          inputValue={inputValue.degreeName}
          handleChange={(e) => handleChange("degreeName", e.target.value)}
          groupID="degreeName"
          feedbackMessage="Please enter your degree."
        />
        <CreateFormGroup
          inputType="text"
          label="Major"
          inputValue={inputValue.majorName}
          handleChange={(e) => handleChange("majorName", e.target.value)}
          groupID="majorName"
          feedbackMessage="Please enter your major."
        />
      </section>

      <SectionTitle title={[title[3]]} />
      <section>
        <CreateFormGroup
          inputType="text"
          label="Company name"
          inputValue={inputValue.companyName}
          handleChange={(e) => handleChange("companyName", e.target.value)}
          groupID="companyName"
          feedbackMessage="Please enter the name of the company."
        />
        <CreateFormGroup
          inputType="text"
          label="Position"
          inputValue={inputValue.position}
          handleChange={(e) => handleChange("position", e.target.value)}
          groupID="position"
          feedbackMessage="Please enter your position at the company."
        />
        <CreateFormGroup
          inputType=""
          label="Achievements"
          inputValue={inputValue.achievements}
          handleChange={(e) => handleChange("achievements", e.target.value)}
          groupID="achievements"
          feedbackMessage="Please enter your achievement at the company."
          as="textarea"
        />
        <Row className="workDuration">
          <Col>
            <CreateFormGroup
              inputType="month"
              label="Start date"
              inputValue={inputValue.workDurationFrom}
              handleChange={(e) =>
                handleChange("workDurationFrom", e.target.value)
              }
              groupID="workDurationFrom"
              feedbackMessage="Please enter the start date of your employment."
            />
          </Col>
          <Col>
            <CreateFormGroup
              inputType="month"
              label="End date"
              inputValue={inputValue.workDurationUntil}
              handleChange={(e) =>
                handleChange("workDurationUntil", e.target.value)
              }
              groupID="workDurationUntil"
              feedbackMessage="Please enter the end date of your employment."
            />
          </Col>
        </Row>
      </section>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

function CVForm({ inputValue, handleChange }) {
  const formTitles = [
    "Personal information",
    "Technical skills",
    "Education",
    "Work experience",
  ];
  return (
    <section>
      <CreateForm
        title={formTitles}
        inputValue={inputValue}
        handleChange={handleChange}
      />
    </section>
  );
}

export default CVForm;
