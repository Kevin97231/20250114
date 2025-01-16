import axios from "axios";
import { useState } from "react";

const url = "http://localhost:3001/products";

const api = axios.create({
  baseURL: url,
});

export const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // LOGIQUE AVANT FACTORISATION

  // const get = (endpoint) => {
  //   setLoading(true);
  //   return api
  //     .get(endpoint)
  //     .then((response) => response.data)
  //     .catch((err) => {
  //       setError(err);
  //       throw err;
  //     })
  //     .finally(() => setLoading(false));
  // };

  // const remove = (endpoint, id) => {
  //   setLoading(true);
  //   return api
  //     .delete(`/${id}`)
  //     .then((resp) => resp.data)
  //     .catch((err) => {
  //       setError(err);
  //       throw err;
  //     })
  //     .finally(() => setLoading(false));
  // };

  const handleRequest = async (requestFunction, ...args) => {
    setLoading(true);

    try {
      const response = await requestFunction(...args);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err);
      throw err;
    }
  };

  const get = (endpoint) => handleRequest(api.get, endpoint);
  const remove = (endpoint, id) =>
    handleRequest(api.delete, `${endpoint}/${id}`);

  const put = (endpoint, id, data) =>
    handleRequest(api.put, `${endpoint}/${id}`, data);

  // Pas encore testé
  const post = (endpoint, data) => handleRequest(api.post, endpoint, data);

  return { loading, error, get, remove, put, post };
};
