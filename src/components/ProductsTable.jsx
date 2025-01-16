import { useState } from "react";
import { Modal } from "./Modal";
import { ProductFormWithVerif } from "./ProductFormWithVerif";

/* eslint-disable react/prop-types */
export const ProductsTable = ({ products, removeFunction, updateFunction }) => {
  let cles = [];

  const [productToModify, setProductToModify] = useState({});

  if (products.length > 0) {
    // type de result de Object.keys = ['id', 'categroie' ...]
    cles = Object.keys(products[0]);
  }

  const handleUpdate = (product) => {
    console.log(product);
    setProductToModify(product);
    const modal = document.getElementById("my_modal");
    if (modal) modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal");
    if (modal) modal.close();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {cles.map((cle) => (
              <th key={cle}>{cle}</th>
            ))}
            <th>Supprimer</th>
            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              {cles.map((cle) => (
                <td key={cle}>{product[cle]}</td>
              ))}
              <td>
                <button
                  className="btn p-2 m-2"
                  onClick={() => removeFunction(product.id)}
                >
                  Supprimer
                </button>
                <button
                  className="btn p-2 m-2"
                  onClick={() => handleUpdate(product)}
                >
                  Modifier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        content={
          // <ProductForm
          //   updateMethod={updateFunction}
          //   productToModify={productToModify}
          // />
          <ProductFormWithVerif
            updateMethod={updateFunction}
            productToModify={productToModify}
            closeModal={closeModal}
          />
        }
      />
    </div>
  );
};
