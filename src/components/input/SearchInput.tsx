import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const SearchInputWrap = styled.input`
  width: 100%;
  border: 0;
  border-radius: 0.625rem;
  box-shadow: -4px 4px 15px 0 rgba(0, 0, 0, 0.1);
  padding: 20px 20px;
  padding-left: 50px;
  font-size: 1rem;
  background-color: var(--box-color);
`;

const SearchInput = () => {
  const [keyWord, setKeyWord] = useState<string>('');

  const urlParams = new URLSearchParams(location.search);
  const searchWord = urlParams.get('search');

  const onChangeKeyWord = (e) => {
    setKeyWord(e.target.value);
  };

  console.log('searchWord', searchWord);

  return (
    <label htmlFor="search">
      <SearchInputWrap
        type="search"
        name="search"
        value={keyWord}
        onChange={onChangeKeyWord}
        placeholder="키워드를 입력해 주세요."
      />
    </label>
  );
};

export default SearchInput;
