import { useState } from "react";

function useRandomPokemonsId() {
  const [randomNumbers, setRandomNumbers] = useState(new Set());
  const max = 100;
  const min = 1;
  if (randomNumbers.size < 12) {
    while (randomNumbers.size < 12) {
      const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
      randomNumbers.add(randomNum);
    }
    setRandomNumbers(new Set(randomNumbers));
  }

  return { randomNumbers: Array.from(randomNumbers) };
}
export default useRandomPokemonsId;
