import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export const ProductForm = ({ updateMethod, productToModify }) => {
  const [name, setName] = useState(productToModify.name);
  const [price, setPrice] = useState(productToModify.price);
  const [number, setNumber] = useState(productToModify.number);
  const [category, setCategory] = useState(productToModify.category);

  useEffect(() => {
    setName(productToModify.name);
    setPrice(productToModify.price);
    setNumber(productToModify.number);
    setCategory(productToModify.category);
  }, [productToModify]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMethod(productToModify.id, { name, price, number, category });
  };

  return (
    <form>
      <div className="grid grid-cols-4 mb-5">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          name="price"
        />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          name="number"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name="category"
        />
      </div>
      <button className="btn" onClick={handleSubmit}>
        Valider
      </button>
    </form>
  );
};
