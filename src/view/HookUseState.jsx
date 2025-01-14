import { useState } from "react";

function HookUseState() {
  const [count, setCount] = useState(0);

  console.log("Composant chargé ");

  let count2 = 0;

  const increment = () => {
    count2 += 1;
    setCount((prevValue) => prevValue + 1);
    console.log(`count ${count}  |  count2 ${count2}`);
  };

  const decrement = () => {
    count2 -= 1;
    setCount((prevValue) => prevValue - 1);
    console.log(`count ${count}  |  count2 ${count2}`);
  };

  return (
    <>
      <h1>Mon hook useState</h1>
      <p>Compteur avec useState: {count}</p>
      <p>Compteur sans useState: {count2}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default HookUseState;
