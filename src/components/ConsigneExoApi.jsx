export const ConsigneExoApi = () => {
  return (
    <>
      <h2>Consigne</h2>
      <div className="p-5 border w-fit">
        1 - Créer un tableau qui contient l'ensemble des produits en BDD
        <br />2 - Ajouter, sur chacune des lignes du tableau :
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
      </div>
    </>
  );
};
