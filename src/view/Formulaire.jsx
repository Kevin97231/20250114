import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
function Formulaire() {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    console.log(e);
    setName(e.target.value);
  };

  return (
    <>
      <h1>Les formulaires</h1>
      <h2>Les champs contrôlés</h2>
      <p>
        En react, nous avons un concept que l'on peut appeler les 'champs
        contrôlés'. En utilisant le <strong>'onChange'</strong> d'un input et le
        hook useState, nous pouvons mettre à jour une variable à chaque
        changement de la valeur présente dans l'input
      </p>

      <div>
        <p>Bonjour, {name}</p>
        <input
          type="text"
          className="input-bordered"
          onChange={handleNameChange}
          value={name}
        />
      </div>
    </>
  );
}

export default Formulaire;
