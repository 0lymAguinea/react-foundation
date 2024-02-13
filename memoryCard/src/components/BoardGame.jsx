import { useEffect, useState } from "react";
import { Col, Row, Card } from "react-bootstrap";

function MainContent() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const max = 100;
      const min = 1;
      const pokemonMap = new Map();

      while (pokemonMap.size < 12) {
        let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomNum}`,
          { method: "GET" }
        );
        const data = await response.json();
        const pokemonId = data.id;
        const pokemonName = data.name;

        // Prevent duplicates based on id
        pokemonMap.set(pokemonId, { id: pokemonId, name: pokemonName });
        console.log(randomNum);
      }
      // Convert map values to an array and set state
      setPokemons(Array.from(pokemonMap.values()));
    }
    getPokemon();
  }, []);
  return (
    <main>
      <Row>
        {pokemons.slice(0, 6).map((pokemon) => (
          <Col sm={2} key={pokemon.id}>
            <Card>
              <Card.Img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              ></Card.Img>
              <Card.Body className="fs-4 mx-auto">{pokemon.name}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
        {pokemons.slice(6, 12).map((pokemon) => (
          <Col sm={2} key={pokemon.id}>
            <Card>
              <Card.Img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              ></Card.Img>
              <Card.Body className="fs-4 mx-auto">{pokemon.name}</Card.Body>
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
