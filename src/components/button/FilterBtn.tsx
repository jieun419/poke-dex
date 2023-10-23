import styled from 'styled-components';
import Filter from '../../assets/icons/Filter';

const FilterButton = styled.button`
  background-color: #000;
  border-radius: 10px;
  padding: 15px;
`;

const FilterBtn = () => {
  return (
    <FilterButton>
      <Filter />
    </FilterButton>
  );
};

export default FilterBtn;
