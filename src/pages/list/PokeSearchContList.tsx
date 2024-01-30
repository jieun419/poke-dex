import styled from 'styled-components';
import PokeInfoCard from '../../components/card/PokeInfoCard';
import SkeletonCard from '../../components/skeleton/SkeletonCard';
import { PokeListT } from '../../types/types';

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

const PokeSearchContList = ({ searchPokeData }: { searchPokeData: PokeListT[] }) => {
  return (
    <PokeContainer>
      {searchPokeData.length <= 0 && <SkeletonCard />}

      {searchPokeData &&
        searchPokeData.length > 0 &&
        searchPokeData.map((pokemon) => <PokeInfoCard key={pokemon.name} name={pokemon.name} />)}
    </PokeContainer>
  );
};

export default PokeSearchContList;
