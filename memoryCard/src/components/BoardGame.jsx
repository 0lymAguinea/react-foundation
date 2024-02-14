import { useEffect, useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import SyncLoader from "react-spinners/SyncLoader";

function MainContent({ handleScoreIncrease, handleScoreReset }) {
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const handleClicking = (e) => {
    if (clickedPokemons.includes(e.target.alt)) {
      setClickedPokemons([]);
      handleScoreReset();
      shuffle(pokemons);
    } else {
      setClickedPokemons([...clickedPokemons, e.target.alt]);
      handleScoreIncrease();
      shuffle(pokemons);
    }
  };

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
      }
      // Convert map values to an array and set state
      setPokemons(Array.from(pokemonMap.values()));
    }
    getPokemon();
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <SyncLoader
            color="#1a3ae1"
            cssOverride={{}}
            margin={5}
            size={100}
            loading={loading}
            className="loaderLoc"
          />
          <p className="loadingInfo fs-1 fw-bold">
            Catching pokemons. Please wait.
          </p>
        </>
      ) : (
        <main>
          <Row className="mt-5">
            {pokemons.slice(0, 6).map((pokemon) => (
              <Col sm={2} key={pokemon.id}>
                <Card onClick={handleClicking}>
                  <Card.Img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                    className="mx-auto"
                    alt={pokemon.name}
                  ></Card.Img>
                  <Card.Body className="fs-4 mx-auto pokemonName">
                    {pokemon.name}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="mt-5">
            {pokemons.slice(6, 12).map((pokemon) => (
              <Col sm={2} key={pokemon.id}>
                <Card onClick={handleClicking}>
                  <Card.Img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                    className="mx-auto"
                    alt={pokemon.name}
                  ></Card.Img>
                  <Card.Body className="fs-4 mx-auto pokemonName">
                    {pokemon.name}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </main>
      )}
    </>
  );
}

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
      <MainContent
        handleScoreIncrease={handleScoreIncrease}
        handleScoreReset={handleScoreReset}
      />
    </>
  );
}
export default BoardGame;
