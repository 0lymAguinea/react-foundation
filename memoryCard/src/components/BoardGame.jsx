import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

function Header({ score, highestScore }) {
  return (
    <header>
      <Row>
        <Col md={3}>
          <h1>Gotta Catch &apos;Em All!</h1>
        </Col>
        <Col md={9}>
          Score:{score}
          highestScore:{highestScore}
        </Col>
      </Row>
    </header>
  );
}

function BoardGame() {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const handleScoreIncrease = () => {
    setScore(score + 1);
  };

  const handleHighestScore = () => {
    setHighestScore(score);
  };

  const handleScoreReset = () => {
    if (highestScore < score) {
      handleHighestScore();
    }
    setScore(0);
  };

  return (
    <>
      <Header score={score} highestScore={highestScore} />
      <Button onClick={handleScoreIncrease}>ADD SCORE</Button>
      <Button onClick={handleScoreReset}>RESET SCORE</Button>
    </>
  );
}
export default BoardGame;
