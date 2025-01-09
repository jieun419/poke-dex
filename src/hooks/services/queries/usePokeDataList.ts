import { useState } from 'react';
import { useQuery } from 'react-query';
import { getPokemonList } from '../../../api/pokemonApi';
import { PokeListT } from '../../../types/types';

export const usePokeDataList = () => {
  const LIMIT = 20;
  const [offset, setOffset] = useState<number>(0);
  const [pokemonList, setPokemonList] = useState<PokeListT[]>([]);

  const { isLoading } = useQuery({
    queryKey: ['pokeList'],
    queryFn: () => upDatePokemon(),
    onSuccess(data) {
      setPokemonList(data);
    },
    onError(err) {
      console.log(err);
    },
  });

  const upDatePokemon = async () => {
    const getPokemonListData = await getPokemonList(LIMIT, offset);
    await new Promise((res) => setTimeout(res, 3000));
    const nextPokeMonList = getPokemonListData.results;

    setOffset((prevOffset) => (prevOffset = prevOffset + LIMIT));
    setPokemonList((prevList) => [...prevList, ...nextPokeMonList]);

    return nextPokeMonList;
  };

  return { pokemonList, isLoading, upDatePokemon };
};
