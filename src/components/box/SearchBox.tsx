import styled from 'styled-components';
import Search from '../../assets/icons/Search';
import FilterBtn from '../button/FilterBtn';

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

const SearchInput = styled.input`
  width: 100%;
  border: 0;
  border-radius: 0.625rem;
  box-shadow: -4px 4px 15px 0 rgba(0, 0, 0, 0.1);
  padding: 20px 20px;
  padding-left: 50px;
  font-size: 1rem;
  background-color: var(--box-color);
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
        <label htmlFor="search">
          <SearchInput type="text" name="search" placeholder="키워드를 입력해 주세요." />
        </label>
      </SearchWrap>
      <FilterWrap>
        <FilterBtn />
      </FilterWrap>
    </SearchContainer>
  );
};

export default SearchBox;
