import { useState, useEffect } from "react";
import useRandomPokemonsId from "./useRandomPokemonsId";
function usePokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { randomNumbers } = useRandomPokemonsId();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await Promise.all(
          randomNumbers.map(async (number) => {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${number}`,
              { method: "GET" }
            );
            return response.json();
          })
        );
        setPokemons(pokemonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { pokemons, loading, error };
}
export default usePokemons;
