/* eslint-disable react/prop-types */
import { useState } from "react";
import { Consigne } from "../components/Consigne";

export const Exercice = () => {
  const products = [
    { category: "Fruits", price: "$1", number: 0, name: "Banana" },
    { category: "Fruits", price: "$1", number: 2, name: "Mango" },
    { category: "Fruits", price: "$2", number: 0, name: "Pineapple" },
    { category: "Vegetables", price: "$2", number: 4, name: "Broccoli" },
    { category: "Vegetables", price: "$4", number: 0, name: "Carrot" },
    { category: "Vegetables", price: "$1", number: 6, name: "Zucchini" },
  ];

  const fruits = products.filter((product) => product.category === "Fruits");
  const vegetables = products.filter(
    (product) => product.category === "Vegetables"
  );

  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <Consigne />
      <h1>Ma liste de produit</h1>
      <input
        type="checkbox"
        value={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ListProduct
        products={fruits}
        afficherHorsSotck={checked}
        searchInputValue={search}
      />
      <ListProduct
        products={vegetables}
        afficherHorsSotck={checked}
        searchInputValue={search}
      />
    </>
  );
};

const ListProduct = ({ products, afficherHorsSotck, searchInputValue }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
          <th>Number</th>
          <th>Catégory</th>
        </tr>
      </thead>
      <tbody>
        {products
          .filter(
            (product) =>
              (afficherHorsSotck ? true : product.number > 0) &&
              product.name
                .toLowerCase()
                .includes(searchInputValue.toLowerCase())
          )
          .map((product) => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.number}</td>
              <td>{product.category}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
