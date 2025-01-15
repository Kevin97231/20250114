export const ConsigneExoApi = () => {
  return (
    <>
      <h2>Consigne</h2>
      <div className="p-5 border w-fit">
        <h2>
          1 - Créer un tableau qui contient l'ensemble des produits en BDD
        </h2>
        <h2>2 - Ajouter, sur chacune des lignes du tableau :</h2>
        <br />
        <ul>
          <li>
            un bouton permettant de supprimer le produit de la ligne
            correspondante
          </li>
          <li>
            un bouton permettant de modifier le produit de la ligne
            correspondante (Réfléchir comment afficher le formulaire. Peut etre
            une div qui contient un formulaire qui s'affiche quand je clique sur
            le bouton 'modifier' / OU un pop-up)
          </li>
        </ul>
        <h2>3 - Créer, puis utiliser un hook personnalisé qui retourne: </h2>
        <ul>
          <li>
            loading: une variable crée avec un useState() dans le hook. Sera à
            false quand pas de chargement, et à true pendant le chargement (le
            temps que l'on reçoive la réponse du serveur)
          </li>
          <li>
            error: une variable crée avec un useState() dans le hook. Sera la
            valeur de l'erreur 'attrapée' dans le .catch
          </li>
          <li>get: une fonction permettant de faire un 'get'</li>
          <li>put: une fonction permettant de faire un 'put'</li>
          <li>remove : une fonction permettant de faire un 'remove'</li>
          <p>
            {" "}
            exemple de retour: {"return {loading, error, get, put, remove};"}
          </p>
        </ul>
      </div>
    </>
  );
};
