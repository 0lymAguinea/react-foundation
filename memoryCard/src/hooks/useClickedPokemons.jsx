import { useState } from "react";
function useClickedPokemons() {
  const [clickedPokemons, setClickedPokemons] = useState([]);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const handleClicking = (
    e,
    pokemons,
    handleScoreIncrease,
    handleScoreReset
  ) => {
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

  return { handleClicking };
}
export default useClickedPokemons;
