import { useQuery } from 'react-query';
import { getPokemonData, getPokemonDetailData } from '../../../api/pokemonApi';
import { useEffect, useState } from 'react';
import useLangugeType from '../../useLangugeType';

export const usePokeDetailData = (name: string) => {
  const [pokeNameKr, setPokeNameKr] = useState<string[]>([]);
  const [pokeFlavorText, setPokeFlavorText] = useState<string[]>([]);
  const [pokeGeneraText, setPokeGeneraText] = useState<string[]>([]);
  const { isLanguageKrMode } = useLangugeType();

  const { data: pokeData } = useQuery({
    queryKey: ['pokeData', name],
    queryFn: () => getPokemonData(name),
    onError(err) {
      console.log(err);
    },
  });

  useQuery({
    queryKey: ['pokeNameKr', name],
    queryFn: () => getPokemonDetailData(name),
    onSuccess(data) {
      const koreanName = data.names.find((name: { language: { name: string } }) => name.language.name === 'ko');
      setPokeNameKr(koreanName.name);
    },
    onError(err) {
      console.log(err);
    },
    enabled: name.length > 0,
  });

  const { data: pokeDetailDatas } = useQuery({
    queryKey: ['pokeDetailDatas', name],
    queryFn: () => getPokemonDetailData(name),
    onSuccess(data) {
      const pokeFlavorEntries = data.flavor_text_entries.find((el: { language: { name: string } }) =>
        isLanguageKrMode ? el.language.name === 'ko' : el.language.name === 'en',
      );

      const pokeGenera = data.genera.find((el: { language: { name: string } }) =>
        isLanguageKrMode ? el.language.name === 'ko' : el.language.name === 'en',
      );

      setPokeFlavorText(pokeFlavorEntries.flavor_text);
      setPokeGeneraText(pokeGenera.genus);
    },
    onError(err) {
      console.log(err);
    },
    enabled: name.length > 0,
  });

  useEffect(() => {
    if (pokeDetailDatas) {
      const pokeFlavorEntries = pokeDetailDatas.flavor_text_entries.find((el: { language: { name: string } }) =>
        isLanguageKrMode ? el.language.name === 'ko' : el.language.name === 'en',
      );

      const pokeGenera = pokeDetailDatas.genera.find((el: { language: { name: string } }) =>
        isLanguageKrMode ? el.language.name === 'ko' : el.language.name === 'en',
      );

      setPokeFlavorText(pokeFlavorEntries.flavor_text);
      setPokeGeneraText(pokeGenera.genus);

      return () => {
        setPokeFlavorText([]);
        setPokeGeneraText([]);
      };
    }
  }, [isLanguageKrMode]);

  return { pokeData, pokeNameKr, pokeFlavorText, pokeGeneraText };
};
