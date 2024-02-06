import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getPokemonList } from '../../api/pokemonApi';
import { useDispatch } from 'react-redux';
import { searchKeyWordActions } from '../../store/searchPokeList-slice';

const SearchInputWrap = styled.input`
  width: 100%;
  border: 0;
  border-radius: 0.625rem;
  box-shadow: -4px 4px 15px 0 rgba(0, 0, 0, 0.1);
  padding: 20px 20px;
  padding-left: 50px;
  font-size: 1rem;
  color: var(--text-color);
  background-color: var(--box-color);
`;

const SearchInput = () => {
  const dispatch = useDispatch();
  const [keyWord, setKeyWord] = useState('');
  const urlParams = new URLSearchParams(location.search);
  const searchWord = urlParams.get('search');

  useQuery({
    queryKey: ['pokeFullList'],
    queryFn: () => getPokemonList(100000, 0),
    onSuccess(data) {
      dispatch(searchKeyWordActions.getSearchKeyWord(searchWord));
      dispatch(searchKeyWordActions.getSearchPokeData(data.results));
    },
    onError(err) {
      console.log(err);
    },
    enabled: urlParams.size !== 0,
  });

  useEffect(() => {
    if (searchWord) {
      setKeyWord(String(searchWord));
      return () => {
        setKeyWord('');
      };
    }
  }, []);

  const onChangeKeyWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
  };

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
