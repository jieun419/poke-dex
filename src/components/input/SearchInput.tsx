import { SetStateAction, useState } from 'react';
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

  const onChangeKeyWord = (e) => {
    setKeyWord(e.target.value);
  };

  console.log(keyWord);

  return (
    <label htmlFor="search">
      <SearchInputWrap
        type="text"
        name="search"
        value={keyWord}
        onChange={onChangeKeyWord}
        placeholder="키워드를 입력해 주세요."
      />
    </label>
  );
};

export default SearchInput;
