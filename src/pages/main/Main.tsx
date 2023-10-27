import styled from 'styled-components';
import SearchBox from '../../components/box/SearchBox';
import MainLogo from '../../components/main/MainLogo';
import PokeInfoCard from '../../components/card/PokeInfoCard';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { getPokemonData, getPokemonList } from '../../api/pokemonApi';
import Loading from '../loading/Loading';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 6.25rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PokeContainer = styled.article`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
`;

const InfinityDiv = styled.div`
  height: 50px;
  width: 100%;
  background-color: #ff0;
`;

type Types = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type Sprites = {
  front_default: string;
};

interface PokeDataT {
  id: number;
  name: string;
  sprites: Sprites;
  types: Types[];
}

interface PokeList {
  name: string;
  url: string;
}

const Main = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [pokemonData, setPokemonData] = useState<PokeDataT[]>([]);
  const [pokemonList, setPokemonList] = useState<PokeList[]>([]);
  const LIMIT = 20;

  useQuery({
    queryKey: ['pokelist'],
    queryFn: () => getPokeData,
    onError(err) {
      console.log(err);
    },
  });

  useQuery({
    queryKey: ['pokedata'],
    queryFn: () => updatePokemon,
    onError(err) {
      console.log(err);
    },
  });

  // 포켓몬 데이터 가져오기
  const getPokeData = async () => {
    const pokemonIdNum = getPokemonIdNum();
    let pokemonDataArr: PokeDataT[] = [];
    for (let pokemonId of pokemonIdNum) {
      const pokeData = await getPokemonData(pokemonId);
      pokemonDataArr.push(pokeData);
    }
    return setPokemonData(pokemonDataArr);
  };

  // url의 아이디값 추출
  const getPokemonIdNum = () => {
    const url = pokemonList.map((el) => el.url);
    const urlArr = url.map((el) => el.split('/'));
    return urlArr.map((el) => Number(el.slice(el.length - 2, el.length - 1)));
  };

  // 데이터 업데이터
  const updatePokemon = async () => {
    const getPokemonListData = await getPokemonList(LIMIT, offset);
    const nextPokemon: PokeList[] = getPokemonListData.results;
    setOffset((prevOffset) => (prevOffset += LIMIT));
    setPokemonList((prevPokemon) => [...prevPokemon, ...nextPokemon]);
    if (pokemonList.length !== 0) {
      getPokeData();
    }
  };

  // 스크롤 바닥인지 감지
  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      console.log('바닥에 도달했습니다.');
      updatePokemon();
    }
  };

  useEffect(() => {
    if (pokemonList.length !== 0) {
      getPokeData();
    }
    return () => {
      null;
    };
  }, [pokemonList]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pokemonList]);

  return (
    <>
      <MainContainer>
        <MainLogo />
        <SearchBox />
        <PokeContainer>
          {!pokemonData && <Loading />}
          {pokemonData &&
            pokemonData.map((pokemon) => (
              <PokeInfoCard
                key={pokemon.name}
                name={pokemon.name}
                sprites={pokemon.sprites.front_default}
                types={pokemon.types}
                id={pokemon.id}
              />
            ))}
        </PokeContainer>
      </MainContainer>
      <InfinityDiv ref={scrollRef} />
    </>
  );
};

export default Main;
