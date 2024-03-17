import { useQueries } from "@tanstack/react-query";
import useRandomPokemonsId from "./useRandomPokemonsId";
import fetchPokemons from "../data/fetchPokemons";
import { useState, useEffect } from "react";
function usePokemons() {
  const [pokemons, setPokemons] = useState([]);

  const { randomNumbers } = useRandomPokemonsId();
  const pokemonQueries = useQueries({
    queries: randomNumbers.map((number) => ({
      queryKey: ["pokemons", number],
      queryFn: () => fetchPokemons(number),
      staleTime: Infinity,
    })),
  });

  const loading = pokemonQueries.some((query) => query.isLoading);
  const error = pokemonQueries.some((query) => query.isError);
  const pokemonData = pokemonQueries.map((query) => query.data);

  useEffect(() => {
    if (!loading) {
      setPokemons(pokemonData);
    }
  }, [loading]);

  return { pokemons, loading, error };
}
export default usePokemons;
