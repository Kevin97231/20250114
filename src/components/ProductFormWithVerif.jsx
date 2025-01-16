/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const ProductFormWithVerif = ({ updateMethod, productToModify }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm();

  const onSubmit = (product) => {
    console.log("Formulaire soumis !");
    updateMethod(productToModify.id, product);
  };

  useEffect(() => {
    Object.keys(productToModify).forEach((key) =>
      setValue(key, productToModify[key])
    );
    clearErrors();
  }, [productToModify]);

  const verifInputNumber = {
    required: "Champ requis !",
    min: { value: 0, message: "Valeur min: 0" },
    max: { value: 10000, message: "Valeur max: 10000" },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-4 mb-5">
        <div className="m-2 p-2">
          <input
            {...register("name")}
            type="text"
            className="flex input input-bordered"
          />

          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div className="m-2 p-2">
          <input
            type="number"
            {...register("price", verifInputNumber)}
            className="input input-bordered"
          />
          {errors.price && <span>{errors.price.message}</span>}
        </div>
        <div className="m-2 p-2">
          <input
            type="number"
            {...register("number", verifInputNumber)}
            className="flex input input-bordered"
          />
          {errors.number && <span>{errors.number.message}</span>}
        </div>
        <div className="m-2 p-2">
          <input
            type="text"
            {...register("category", {
              required: "champ requis",
              maxLength: { value: 10, message: "10 car. max" },
            })}
            className="flex input input-bordered"
          />
          {errors.category && <span>{errors.category.message}</span>}
        </div>
      </div>
      <button className="btn">Valider</button>
    </form>
  );
};
