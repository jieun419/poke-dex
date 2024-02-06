import Search from '../../assets/icons/Search';
import { CircleButton } from './Button.styled';

const SearchBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <CircleButton name="search button" onClick={onClick}>
      <Search />
    </CircleButton>
  );
};

export default SearchBtn;
