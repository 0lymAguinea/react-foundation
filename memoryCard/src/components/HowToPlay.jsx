import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

function ModalInfo(props) {
  return (
    <Modal show={props.show} onHide={props.handleHide} centered>
      <Modal.Header>
        <Modal.Title>How to play?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Click a pokemon to get points but don&apos;t click a pokemon twice!
      </Modal.Body>
      <Modal.Footer className="mx-auto">
        <Button variant="success" onClick={props.handleHide}>
          Start game
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function HowToPlay() {
  const [show, setShow] = useState(true);
  const handleHide = () => {
    setShow(false);
  };
  return <ModalInfo show={show} handleHide={handleHide}></ModalInfo>;
}

ModalInfo.propTypes = {
  show: PropTypes.bool,
  handleHide: PropTypes.func,
};
export default HowToPlay;
