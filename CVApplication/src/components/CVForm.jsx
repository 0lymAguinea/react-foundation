import Form from "react-bootstrap/Form";
import "../styles/CVForm.css";

function SectionTitle({ title }) {
  return <h3 className="sectionTitle">{title}</h3>;
}

function CreateFormLabel({ label }) {
  return <Form.Label className="label">{label}</Form.Label>;
}

function CreateFormInput({ inputType, label, inputValue, handleChange }) {
  return (
    <>
      <Form.Control
        type={inputType}
        placeholder={label}
        value={inputValue}
        onChange={handleChange}
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
}) {
  return (
    <Form.Group controlId={groupID}>
      <CreateFormLabel label={label} />
      <CreateFormInput
        inputType={inputType}
        label={label}
        inputValue={inputValue}
        handleChange={handleChange}
      />
    </Form.Group>
  );
}

function CreateForm({ title, inputValue, handleChange }) {
  return (
    <Form>
      <SectionTitle title={title[0]} />
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

      <SectionTitle title={[title[1]]} />
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
