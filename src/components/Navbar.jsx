import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/use-state"}>Le hook useState</Link>
            </li>
            <li>
              <Link to={"/formulaire"}>Les formulaires</Link>
            </li>
            <li>
              <Link to={"/flux"}>Les flux de données</Link>
            </li>
            <li>
              <Link to={"/hook-use-effect"}>Le hook useEffect</Link>
            </li>
            <li>
              <Link to={"/requete"}>Requetes aux API</Link>
            </li>
            <li>
              <Link to={"/hook-perso"}>Les hooks personnalisés</Link>
            </li>
            <li>
              <Link to={"/hook-use-memo"}>Le hook useMemo</Link>
            </li>
            <li>
              <Link to={"/exercice"}>Exercice fruits/légumes</Link>
            </li>
            <li>
              <Link to={"/exercice-api"}>Exercice API</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to={"/"}>Accueil</Link>
      </div>
    </div>
  );
}

export default Navbar;
