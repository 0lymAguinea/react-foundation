import { useEffect, useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import SyncLoader from "react-spinners/SyncLoader";
import useScoreBoard from "../hooks/useScoreBoard";
import useClickedPokemons from "../hooks/useClickedPokemons";
import usePokemons from "../hooks/usePokemons";
import MainContent from "./MainContent";

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

function BoardGame() {
  const { score, highestScore, handleScoreIncrease, handleScoreReset } =
    useScoreBoard(0);

  return (
    <>
      <Header score={score} highestScore={highestScore} />
      <MainContent
        handleScoreIncrease={handleScoreIncrease}
        handleScoreReset={handleScoreReset}
      />
    </>
  );
}
export default BoardGame;
