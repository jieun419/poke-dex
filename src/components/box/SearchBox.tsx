import styled from 'styled-components';
import Search from '../../assets/icons/Search';
import FilterBtn from '../button/FilterBtn';
import SearchInput from '../input/SearchInput';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  margin-bottom: 100px;
`;

const SearchWrap = styled.div`
  position: relative;
  width: 100%;
`;

const FilterWrap = styled.div`
  height: 100%;
`;

const IcSearch = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translate(0, -50%);
`;

const SearchBox = () => {
  return (
    <SearchContainer>
      <SearchWrap>
        <IcSearch>
          <Search width="35" height="35" />
        </IcSearch>
        <SearchInput />
      </SearchWrap>
      <FilterWrap>
        <FilterBtn />
      </FilterWrap>
    </SearchContainer>
  );
};

export default SearchBox;
