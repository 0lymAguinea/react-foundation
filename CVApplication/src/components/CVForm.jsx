import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
          groupID={1}
        />
        <CreateFormGroup
          inputType="text"
          label="Last name"
          inputValue={inputValue.lastName}
          handleChange={(e) => handleChange("lastName", e.target.value)}
          groupID={2}
        />
        <CreateFormGroup
          inputType="email"
          label="Email address"
          inputValue={inputValue.emailAddress}
          handleChange={(e) => handleChange("emailAddress", e.target.value)}
          groupID={3}
        />
        <CreateFormGroup
          inputType="tel"
          label="Mobile number"
          inputValue={inputValue.mobileNumber}
          handleChange={(e) => handleChange("mobileNumber", e.target.value)}
          groupID={4}
        />
      </section>

      <SectionTitle title={[title[1]]} />
      <section>
        <CreateFormGroup
          inputType="text"
          label="University"
          inputValue={inputValue.universityName}
          handleChange={(e) => handleChange("universityName", e.target.value)}
          groupID={5}
        />
        <CreateFormGroup
          inputType="text"
          label="Year graduate"
          inputValue={inputValue.graduateYear}
          handleChange={(e) => handleChange("graduateYear", e.target.value)}
          groupID={6}
        />
        <CreateFormGroup
          inputType="text"
          label="Degree"
          inputValue={inputValue.degreeName}
          handleChange={(e) => handleChange("degreeName", e.target.value)}
          groupID={7}
        />
        <CreateFormGroup
          inputType="text"
          label="Major"
          inputValue={inputValue.majorName}
          handleChange={(e) => handleChange("majorName", e.target.value)}
          groupID={8}
        />
      </section>

      <SectionTitle title={[title[2]]} />
      <section>
        <CreateFormGroup
          inputType="text"
          label="Company name"
          inputValue={inputValue.companyName}
          handleChange={(e) => handleChange("companyName", e.target.value)}
          groupID={9}
        />
        <CreateFormGroup
          inputType="text"
          label="Position"
          inputValue={inputValue.position}
          handleChange={(e) => handleChange("position", e.target.value)}
          groupID={10}
        />
        <CreateFormGroup
          inputType=""
          label="Achievements"
          inputValue={inputValue.achievements}
          handleChange={(e) => handleChange("achievements", e.target.value)}
          groupID={11}
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
              groupID={12}
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
              groupID={13}
            />
          </Col>
        </Row>
      </section>
    </Form>
  );
}

function CVForm({ inputValue, handleChange }) {
  const formTitles = ["Personal information", "Education", "Work experience"];
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
