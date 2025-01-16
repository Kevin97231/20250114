import { useMemo, useState } from "react";

export const WithUseMemo = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState("");

  const sum = useMemo(() => {
    console.log("Calcul avec useMemo");
    return numbers.reduce((total, currentValue) => total + currentValue);
  }, [numbers]);

  const addNumbers = () => {
    setNumbers((prev) => [...prev, Math.random() * 10]);
  };

  return (
    <div className="m-10 border w-fit">
      <h2>Avec useMemo</h2>
      <button onClick={addNumbers}>Ajouter un chiffre</button>
      <div>
        <p>{sum}</p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="mt-2 input input-bordered"
        />
      </div>
    </div>
  );
};
