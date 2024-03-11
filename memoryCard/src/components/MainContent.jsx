import { Col, Row, Card } from "react-bootstrap";
import SyncLoader from "react-spinners/SyncLoader";
import useClickedPokemons from "../hooks/useClickedPokemons";
import usePokemons from "../hooks/usePokemons";
import PropTypes from "prop-types";

function MainContent({ handleScoreIncrease, handleScoreReset }) {
  const { pokemons, loading, error } = usePokemons([]);

  const { handleClicking } = useClickedPokemons();

  if (error) {
    return <p className="fs-1 text-center">A network error was encountered</p>;
  }

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
                <Card
                  onClick={(e) =>
                    handleClicking(
                      e,
                      pokemons,
                      handleScoreIncrease,
                      handleScoreReset
                    )
                  }
                >
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
                <Card
                  onClick={(e) =>
                    handleClicking(
                      e,
                      pokemons,
                      handleScoreIncrease,
                      handleScoreReset
                    )
                  }
                >
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

MainContent.propTypes = {
  handleScoreIncrease: PropTypes.func,
  handleScoreReset: PropTypes.func,
};

export default MainContent;
