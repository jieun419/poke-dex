import styled from 'styled-components';
import { useEffect } from 'react';
import PokeInfoCard from '../../components/card/PokeInfoCard';
import SkeletonCard from '../../components/skeleton/SkeletonCard';
import { usePokeDataList } from '../../hooks/services/queries/usePokeDataList';

const PokeContainer = styled.article`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const PokeContList = () => {
  const { pokemonList, upDatePokemon } = usePokeDataList();

  useEffect(() => {
    const eventScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight) {
        console.log('바닥감지 업데이트');
        upDatePokemon();
      }
    };

    if (pokemonList.length > 0) {
      window.addEventListener('scroll', eventScroll);
      return () => {
        window.removeEventListener('scroll', eventScroll);
      };
    }
  }, [pokemonList]);

  return (
    <PokeContainer>
      {pokemonList.length <= 0 && <SkeletonCard />}

      {pokemonList &&
        pokemonList.length > 0 &&
        pokemonList.map((pokemon) => <PokeInfoCard key={pokemon.name} name={pokemon.name} />)}
    </PokeContainer>
  );
};

export default PokeContList;
