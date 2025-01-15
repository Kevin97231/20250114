import { useIncrement } from "../hooks/useIncrement";
import { useToggle } from "../hooks/useToggle";

export const HookPersoView = () => {
  const [state, toggle] = useToggle();

  const { state: count, increment, decrement } = useIncrement({});

  return (
    <section className="pt-20">
      <h1>Les hooks personnalisés</h1>

      <div className="pt-20 px-5">
        <p className="pb-2">
          <strong>
            <a href="https://usehooks.com/"></a>
          </strong>
        </p>

        <h2>Cas de figure n°1</h2>
        <p>
          Dans une application react, on peut souvent avoir besoin de faire
          varier une valeur entre vrai et faux (par exemple, pour afficher /
          masquer un valeur) Pour cela, on peut mettre en place un hook
          personnalisé (et ainsi factoriser du code)
        </p>

        <input type="checkbox" checked={state} onChange={toggle} />
        <p>{state ? "case cochée" : "case non cochée"}</p>
        <p>{state && "case cochée"}</p>
        <br />
        <h2>Cas de figure n°2</h2>
        <p>Je veux créer un hook perso. pour gérer un compteur</p>
        {count}
        <button className="btn" onClick={increment}>
          Incrementer
        </button>
        <button className="btn" onClick={decrement}>
          Décrementer
        </button>
      </div>
    </section>
  );
};
