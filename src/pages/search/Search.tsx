import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import SearchBox from '../../components/box/SearchBox';
import BackBtn from '../../components/button/BackBtn';
import PokeSearchContList from '../list/PokeSearchContList';
import NothingBox from '../../components/box/NothingBox';

const SearchContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 6.25rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContWrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    font-size: 14px;
    color: var(--text-color);
  }
`;

const Search = () => {
  const searchPokeData = useSelector((state: RootState) => state.searchKeyWord.pokeData);
  const navigate = useNavigate();

  const eventBackPage = () => {
    navigate(-1);
  };

  return (
    <SearchContainer>
      <SearchBox />
      <ContWrap>
        <BackBtn onClick={eventBackPage} />
        <span>{searchPokeData.length}건의 포켓몬이 검색되었습니다.</span>
      </ContWrap>
      {searchPokeData.length > 0 ? <PokeSearchContList searchPokeData={searchPokeData} /> : <NothingBox />}
    </SearchContainer>
  );
};

export default Search;
