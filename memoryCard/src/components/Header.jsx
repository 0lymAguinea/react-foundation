import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
function Header({ score, highestScore }) {
  return (
    <header>
      <Row>
        <Col sm={4}>
          <h1 className="text-center">Gotta Catch &apos;Em All!</h1>
        </Col>
        <Col sm={8} className="text-center">
          <span className="fs-3 me-5">Score: {score}</span>
          <span className="fs-3 ">Highest score: {highestScore}</span>
        </Col>
      </Row>
    </header>
  );
}

Header.propTypes = {
  score: PropTypes.number,
  highestScore: PropTypes.number,
};

export default Header;
