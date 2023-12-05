import styled from 'styled-components';
import SearchBox from '../../components/box/SearchBox';
import MainLogo from '../../components/main/MainLogo';
import PokeInfoCard from '../../components/card/PokeInfoCard';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { getPokemonList } from '../../api/pokemonApi';
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const InfinityDiv = styled.div`
  height: 50px;
  width: 100%;
  background-color: #ff0;
`;

interface PokeList {
  name: string;
  url: string;
}

const Main = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [pokemonList, setPokemonList] = useState<PokeList[]>([]);
  const LIMIT = 20;

  useQuery({
    queryKey: ['pokeList'],
    queryFn: () => upDatePokemon(),
    onSuccess(data) {
      setPokemonList(data);
    },
    onError(err) {
      console.log(err);
    },
    refetchOnWindowFocus: false,
  });

  const upDatePokemon = async () => {
    const getPokemonListData = await getPokemonList(LIMIT, offset);
    const nextPokeMonList = getPokemonListData.results;

    setOffset((prevOffset) => (prevOffset = prevOffset + LIMIT));
    setPokemonList((prevList) => [...prevList, ...nextPokeMonList]);

    return nextPokeMonList;
  };

  const eventScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      console.log('바닥');
      upDatePokemon();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', eventScroll);

    return () => {
      window.removeEventListener('scroll', eventScroll);
    };
  });

  return (
    <>
      <MainContainer>
        <MainLogo />
        <SearchBox />
        <PokeContainer>
          {!pokemonList && <Loading />}
          {pokemonList && pokemonList.map((pokemon) => <PokeInfoCard key={pokemon.name} name={pokemon.name} />)}
        </PokeContainer>
      </MainContainer>
      <InfinityDiv ref={scrollRef} />
    </>
  );
};

export default Main;
