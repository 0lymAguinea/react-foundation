async function fetchPokemons(number) {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
  return result.json();
}
export default fetchPokemons;
