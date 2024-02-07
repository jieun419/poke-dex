import { useQuery } from 'react-query';
import { getPokemonData, getPokemonDataKr } from '../../../api/pokemonApi';
import { useState } from 'react';

export const usePokeDetailData = (name: string) => {
  const [pokeNameKr, setPokeNameKr] = useState<string[]>([]);

  const { data: pokeData } = useQuery({
    queryKey: ['pokeData', name],
    queryFn: () => getPokemonData(name),
    onError(err) {
      console.log(err);
    },
  });

  useQuery({
    queryKey: ['pokeNameKr', name],
    queryFn: () => getPokemonDataKr(name),
    onSuccess(data) {
      const koreanName = data.names.find((name: { language: { name: string } }) => name.language.name === 'ko');
      setPokeNameKr(koreanName.name);
    },
    onError(err) {
      console.log(err);
    },
    enabled: name.length > 0,
  });

  return { pokeData, pokeNameKr };
};
