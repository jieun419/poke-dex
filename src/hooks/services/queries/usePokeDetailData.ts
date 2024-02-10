import { useQuery } from 'react-query';
import { getPokemonData, getPokemonDetailData } from '../../../api/pokemonApi';
import { useEffect, useState } from 'react';
import useLangugeType from '../../useLangugeType';
import { PokeDetailDatasT } from '../../../types/types';

export const usePokeDetailData = (name: string) => {
  const [pokeName, setPokeName] = useState<string>('');
  const [pokeFlavorText, setPokeFlavorText] = useState<string>('');
  const [pokeGeneraText, setPokeGeneraText] = useState<string>('');
  const { isLanguageKrMode } = useLangugeType();

  //* 일반 데이터
  const { data: pokeData } = useQuery({
    queryKey: ['pokeData', name],
    queryFn: () => getPokemonData(name),
    onError(err) {
      console.log(err);
    },
  });

  //* 포켓몬 디테일 데이터
  const { data: pokeDetailDatas } = useQuery({
    queryKey: ['pokeDetailDatas', name],
    queryFn: () => getPokemonDetailData(name),
    onSuccess(data) {
      upDateLangugeData(data);
    },
    onError(err) {
      console.log(err);
    },
  });

  const upDateLangugeData = (pokeDatas: PokeDetailDatasT) => {
    if (pokeDatas) {
      const pokeFlavorEntries = pokeDatas.flavor_text_entries.find((flavor) =>
        isLanguageKrMode ? flavor.language?.name === 'ko' : flavor.language?.name === 'en',
      );

      const pokeGenera = pokeDatas.genera.find((genera) =>
        isLanguageKrMode ? genera.language?.name === 'ko' : genera.language?.name === 'en',
      );

      const pokeName = pokeDatas.names.find((name) =>
        isLanguageKrMode ? name.language?.name === 'ko' : name.language?.name === 'en',
      );

      if (pokeName) {
        setPokeName(pokeName.name);
      }

      if (pokeFlavorEntries && pokeFlavorEntries.flavor_text) {
        setPokeFlavorText(pokeFlavorEntries.flavor_text);
      }

      if (pokeGenera && pokeGenera.genus) {
        setPokeGeneraText(pokeGenera.genus);
      }
    }
  };

  useEffect(() => {
    upDateLangugeData(pokeDetailDatas);
    return () => {
      setPokeFlavorText('');
      setPokeGeneraText('');
    };
  }, [isLanguageKrMode]);

  return { pokeData, pokeName, pokeFlavorText, pokeGeneraText };
};
