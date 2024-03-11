import { useEffect, useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import SyncLoader from "react-spinners/SyncLoader";
import useScoreBoard from "../hooks/useScoreBoard";
import useClickedPokemons from "../hooks/useClickedPokemons";
import usePokemons from "../hooks/usePokemons";
import MainContent from "./MainContent";
import Header from "./Header";

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
