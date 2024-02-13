import { useEffect, useState } from "react";
import { Col, Row, Card } from "react-bootstrap";

function MainContent() {
  const [pokemonName, setPokemonName] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const max = 100;
      const min = 1;
      const pokemonSet = new Set();

      while (pokemonSet.size < 12) {
        let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomNum}`,
          { method: "GET" }
        );
        const data = await response.json();
        const pokemon = data.name;
        pokemonSet.add(pokemon);
      }
      setPokemonName(Array.from(pokemonSet));
    }
    getPokemon();
  }, []);
  console.log(pokemonName);
  return (
    <main>
      <Row>
        {pokemonName.slice(0, 6).map((pokemon) => (
          <Col sm={2} key={pokemon}>
            <Card>
              <Card.Body>{pokemon}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {pokemonName.slice(6, 12).map((pokemon) => (
          <Col sm={2} key={pokemon}>
            <Card>
              <Card.Body>{pokemon}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </main>
  );
}

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
      <MainContent />
    </>
  );
}
export default BoardGame;
