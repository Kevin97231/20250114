import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = () => setState((prevValue) => !prevValue);

  return [state, toggle];
};
