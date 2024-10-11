import React, { useState } from "react";

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter(value + counter);
  };

  return { counter, increaseBy };
};
