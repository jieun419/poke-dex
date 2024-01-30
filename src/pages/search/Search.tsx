import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import SearchBox from '../../components/box/SearchBox';
import BackBtn from '../../components/button/BackBtn';
import PokeSearchContList from '../list/PokeSearchContList';

const SearchContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 6.25rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Search = () => {
  const searchPokeData = useSelector((state: RootState) => state.searchKeyWord.pokeData);
  const navigate = useNavigate();

  const eventBackPage = () => {
    navigate(-1);
  };

  return (
    <SearchContainer>
      <div>
        <BackBtn onClick={eventBackPage} />
      </div>
      <SearchBox />
      <PokeSearchContList searchPokeData={searchPokeData} />
    </SearchContainer>
  );
};

export default Search;
