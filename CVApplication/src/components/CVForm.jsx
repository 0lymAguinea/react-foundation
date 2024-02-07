/* eslint-disable react/prop-types */
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import "../styles/CVForm.css";

function SectionTitle({ title }) {
  return <h3 className="sectionTitle">{title}</h3>;
}

function CreateFormLabel({ label }) {
  return <Form.Label className="label">{label}</Form.Label>;
}

function CreateFormInput({ inputType, label, inputValue, handleChange, as }) {
  return (
    <>
      <Form.Control
        type={inputType}
        placeholder={label}
        value={inputValue}
        onChange={handleChange}
        as={as}
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
  as,
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
      />
    </Form.Group>
  );
}

function CreateForm({ title, inputValue, handleChange }) {
  return (
    <Form>
      <SectionTitle title={title[0]} />
      <section>
        <CreateFormGroup
          inputType="text"
          label="First name"
          inputValue={inputValue.firstName}
          handleChange={(e) => handleChange("firstName", e.target.value)}
          groupID="firstName"
        />
        <CreateFormGroup
          inputType="text"
          label="Last name"
          inputValue={inputValue.lastName}
          handleChange={(e) => handleChange("lastName", e.target.value)}
          groupID="lastName"
        />
        <CreateFormGroup
          inputType="email"
          label="Email address"
          inputValue={inputValue.emailAddress}
          handleChange={(e) => handleChange("emailAddress", e.target.value)}
          groupID="emailAddress"
        />
        <CreateFormGroup
          inputType="tel"
          label="Mobile number"
          inputValue={inputValue.mobileNumber}
          handleChange={(e) => handleChange("mobileNumber", e.target.value)}
          groupID="mobileNumber"
        />
        <CreateFormGroup
          inputType="text"
          label="GitHub"
          inputValue={inputValue.github}
          handleChange={(e) => handleChange("github", e.target.value)}
          groupID="github"
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
        />
        <CreateFormGroup
          inputType="text"
          label="Technoligies / Framework"
          inputValue={inputValue.technologiesFrameworks}
          handleChange={(e) =>
            handleChange("technologiesFrameworks", e.target.value)
          }
          groupID="technologiesFrameworks"
        />
        <CreateFormGroup
          inputType="text"
          label="Developer tools"
          inputValue={inputValue.developerTools}
          handleChange={(e) => handleChange("developerTools", e.target.value)}
          groupID="developerTools"
        />
        <CreateFormGroup
          inputType="text"
          label="Project management"
          inputValue={inputValue.projectManagement}
          handleChange={(e) =>
            handleChange("projectManagement", e.target.value)
          }
          groupID="projectManagement"
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
        />
        <Row>
          <Col>
            <CreateFormGroup
              inputType="month"
              label="School year start"
              inputValue={inputValue.graduateYear}
              handleChange={(e) => handleChange("yearStart", e.target.value)}
              groupID="yearStart"
            />
          </Col>
          <Col>
            <CreateFormGroup
              inputType="month"
              label="School year graduate"
              inputValue={inputValue.graduateYear}
              handleChange={(e) => handleChange("yearGraduate", e.target.value)}
              groupID="yearGraduate"
            />
          </Col>
        </Row>
        <CreateFormGroup
          inputType="text"
          label="Degree"
          inputValue={inputValue.degreeName}
          handleChange={(e) => handleChange("degreeName", e.target.value)}
          groupID="degreeName"
        />
        <CreateFormGroup
          inputType="text"
          label="Major"
          inputValue={inputValue.majorName}
          handleChange={(e) => handleChange("majorName", e.target.value)}
          groupID="majorName"
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
        />
        <CreateFormGroup
          inputType="text"
          label="Position"
          inputValue={inputValue.position}
          handleChange={(e) => handleChange("position", e.target.value)}
          groupID="position"
        />
        <CreateFormGroup
          inputType=""
          label="Achievements"
          inputValue={inputValue.achievements}
          handleChange={(e) => handleChange("achievements", e.target.value)}
          groupID="achievements"
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
            />
          </Col>
        </Row>
      </section>
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
