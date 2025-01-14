function JsxTheorie() {
  const title = "Bienvenue <strong>sur mon application React</strong>";

  const path = "../src/assets/react.svg";

  const style = { color: "red", backgroundColor: "gray" };

  // const user = {
  //   firstName: "John",
  //   lastName: "Doe",
  // };

  const user = undefined;

  const handleClick = () => {
    alert("J'ai cliqué");
  };

  const fruits = ["banane", "pomme", "abricot", "poire"];

  return (
    <>
      <h1>{title}</h1>

      <p id="monId" className="maClass">
        Mon paragraphe
      </p>

      {/* Déconseillé, à utiliser dans des cas particuliers  */}
      <p dangerouslySetInnerHTML={{ __html: title }}></p>

      <div>
        <img src={path} alt="" />
      </div>

      {/* Affichage conditionnel */}
      {user ? <h2>Bonjour {user.firstName}</h2> : <h2>Bonjour</h2>}
      {user && <h2>Bonjour {user.firstName}</h2>}

      {/* La propriété 'style' */}
      <h1 style={{ color: "red", backgroundColor: "gray" }}>
        Titre en rouge !
      </h1>
      <h1 style={style}>Titre en rouge !</h1>

      {/* les évènements */}
      <button onClick={handleClick}>Cliquez !</button>
      <button onClick={() => alert("j'ai encore cliqué")}>Cliquez !</button>

      {/* Parcourir et afficher une liste */}
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      {/* Utiliser un composant enfant */}
      <ComposantEnfant color="blue" id="myId" className="myClass">
        Voici ton texte, mon enfant{" "}
      </ComposantEnfant>
    </>
  );
}

export default JsxTheorie;

const ComposantEnfant = ({ color, children, ...props }) => {
  return (
    <>
      <p style={{ color: color }} {...props}>
        {children}
      </p>
    </>
  );
};
