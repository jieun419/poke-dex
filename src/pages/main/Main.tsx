import styled from 'styled-components';
import SearchBox from '../../components/box/SearchBox';
import MainLogo from '../../components/main/MainLogo';
import PokeContList from '../list/PokeContList';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 6.25rem;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    padding: 0 1.2rem;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <MainLogo />
      <SearchBox />
      <PokeContList />
    </MainContainer>
  );
};

export default Main;
