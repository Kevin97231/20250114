import { useState } from "react";

export const useIncrement = ({
  initialState = 0,
  max = Infinity,
  min = -Infinity,
}) => {
  const [state, setState] = useState(initialState);

  const increment = () => setState((prev) => (prev < max ? prev + 1 : prev));

  const decrement = () => setState((prev) => (prev > min ? prev - 1 : prev));

  return { state, increment, decrement };
};
