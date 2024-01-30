import styled from 'styled-components';
import SearchBox from '../../components/box/SearchBox';
import PokeContList from '../list/PokeContList';
import BackBtn from '../../components/button/BackBtn';
import { useNavigate } from 'react-router-dom';

const SearchContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 6.25rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Search = () => {
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
      <PokeContList />
    </SearchContainer>
  );
};

export default Search;
