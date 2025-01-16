import { useEffect, useState } from "react";
import { ConsigneExoApi } from "../components/ConsigneExoApi";
import axios from "axios";
import { ProductsTable } from "../components/ProductsTable";
import { useAxios } from "../hooks/useAxios";

export const ExerciceApi = () => {
  const [products, setProducts] = useState([]);

  const { get, remove, put } = useAxios();

  const url = "http://localhost:3001/products";

  useEffect(() => {
    get("").then((resp) => setProducts(resp));
  }, []);

  const removeProduct = (id) => {
    remove("", id).then((response) =>
      setProducts((prevProduct) =>
        prevProduct.filter((productFilter) => response.id !== productFilter.id)
      )
    );
  };

  const updateProduct = (id, updatedProduct) => {
    put("", id, updatedProduct).then((response) =>
      setProducts((prevValues) =>
        prevValues.map((product) =>
          product.id === response.id ? { ...response } : product
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
