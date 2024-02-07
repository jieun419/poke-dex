import { useQuery } from 'react-query';
import { getPokemonData } from '../../../api/pokemonApi';

export const usePokeDetailData = (name: string) => {
  const { data: pokeData } = useQuery({
    queryKey: ['pokeData', name],
    queryFn: () => getPokemonData(name),
    onError(err) {
      console.log(err);
    },
  });

  return { pokeData };
};
