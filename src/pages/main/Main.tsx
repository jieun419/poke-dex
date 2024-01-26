import styled from 'styled-components';
import SearchBox from '../../components/box/SearchBox';
import MainLogo from '../../components/main/MainLogo';
import { useRef } from 'react';
import PokeContList from '../list/PokeContList';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 6.25rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const InfinityDiv = styled.div`
  height: 50px;
  width: 100%;
  background-color: #ff0;
`;

const Main = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <MainContainer>
        <MainLogo />
        <SearchBox />
        <PokeContList />
      </MainContainer>
      <InfinityDiv ref={scrollRef} />
    </>
  );
};

export default Main;
