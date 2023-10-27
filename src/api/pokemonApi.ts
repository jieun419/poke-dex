import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 1000,
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  },
);

export const getPokemonData = async (id: number) => {
  const res = await instance.get(`/pokemon/${id}`);
  return res.data;
};

export const getPokemonList = async (limit?: number, offset?: number) => {
  const res = await instance.get(`/pokemon?limit=${limit}&offset=${offset}`);
  return res.data;
};
