import { useEffect, useState } from "react";
import { ConsigneExoApi } from "../components/ConsigneExoApi";
import axios from "axios";
import { ProductsTable } from "../components/ProductsTable";

export const ExerciceApi = () => {
  const [products, setProducts] = useState([]);

  const url = "http://localhost:3001/products";

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => setProducts(resp.data))
      .catch((err) => setProducts(err));
  }, []);

  const removeProduct = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then((response) =>
        setProducts((prevProduct) =>
          prevProduct.filter(
            (productFilter) => response.data.id !== productFilter.id
          )
        )
      );
  };

  const updateProduct = (id, updatedProduct) => {
    console.log("Product updated");

    const updateUrl = `${url}/${id}`;
    axios
      .put(updateUrl, updatedProduct)
      .then((response) =>
        setProducts((prevValues) =>
          prevValues.map((product) =>
            product.id === response.data.id ? { ...response.data } : product
          )
        )
      );
  };

  return (
    <>
      <h1>Exercice API</h1>
      <ConsigneExoApi />
      <ProductsTable
        products={products}
        removeFunction={removeProduct}
        updateFunction={updateProduct}
      />
    </>
  );
};
