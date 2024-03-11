import useScoreBoard from "../hooks/useScoreBoard";
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
