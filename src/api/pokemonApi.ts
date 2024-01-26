import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
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

  function (err) {
    return Promise.reject(err);
  },
);

export const getPokemonData = async (name: string) => {
  const res = await instance.get(`/pokemon/${name}`);
  return res.data;
};

export const getPokemonList = async (limit: number, offset: number) => {
  const res = await instance.get(`/pokemon?limit=${limit}&offset=${offset}`);
  return res.data;
};

export const getPokemonSpeciesData = async (url: string) => {
  const res = await instance.get(url);
  return res.data;
};
