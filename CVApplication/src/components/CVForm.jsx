import Form from "react-bootstrap/Form";

function CreateFormLabel() {
  return <Form.Label></Form.Label>;
}

function CreateFormInput() {
  return <Form.Control></Form.Control>;
}

function CreateFormGroup() {
  return (
    <Form.Group>
      <CreateFormLabel />
      <CreateFormInput />
    </Form.Group>
  );
}

function CreateForm() {
  return (
    <Form>
      <CreateFormGroup />
    </Form>
  );
}

function CVForm() {
  return (
    <section>
      <CreateForm> </CreateForm>
    </section>
  );
}

export default CVForm;
