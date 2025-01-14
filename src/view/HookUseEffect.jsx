import { useEffect } from "react";
import { useState } from "react";

export const HookUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Montage du composant");

    // return () => {
    //   console.log("Démontage du composant");
    // };
  }, []);

  useEffect(() => {
    console.log("Effet secondaire déclenché");
    document.title = `count : ${count}`;

    // Fonction de nettoyage
    // Quand un des états de mon tableau de dépendances changent, le useEffect d'abord
    // la foonction de nettoyage, puis 'ce qui est audessus du 'return() => ' juste après
    return () => {
      console.log("return du useEffect (exécuté au démontage du composant");
    };
  }, [count]);

  return (
    <>
      <h1>Le hook useEffect</h1>
      <ul>
        Le hook useEffect est utilisé:
        <li>Pour gérer des effets secondaires</li>
        <li>
          Pour effectuer des opérations après le rendu du composant (comme des
          appels aux API, gestion d'abonnements etc ..)
        </li>
      </ul>
      <p>
        Très souvent, on utilise le hook useEffect en conjonction avec un
        useState pour gérer des effets secondaires à un changement d'état
      </p>
      <button onClick={() => setCount((prev) => prev + 1)}>incrémenter</button>
    </>
  );
};
