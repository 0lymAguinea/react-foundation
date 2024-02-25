import { useState } from "react";

function useCounterInput(initialCount = 1, setCart) {
  const [itemCounter, setItemCounter] = useState(initialCount);

  const handleCounterInput = (e) => {
    const inputValue = e.target.value;

    setItemCounter(inputValue);
  };

  const handleCounterIncrement = () => {
    setItemCounter(parseInt(itemCounter) + 1);
  };

  const handleCounterDecrement = () => {
    if (itemCounter > 1) {
      setItemCounter(itemCounter - 1);
    }
  };

  const handleCartCounter = (item, sign) => {
    const incrementValue = sign === "+" ? 1 : -1;

    setItemCounter(parseInt(itemCounter) + incrementValue);
    setCart((prevCount) => {
      const updatedCart = prevCount.map((cart) =>
        cart.id === item.id
          ? {
              ...cart,
              quantity: parseInt(cart.quantity) + incrementValue,
            }
          : cart
      );
      return updatedCart;
    });
  };

  return {
    itemCounter,
    handleCounterInput,
    handleCounterIncrement,
    handleCounterDecrement,
    handleCartCounter,
  };
}
export default useCounterInput;
