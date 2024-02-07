import styled from 'styled-components';
import SearchBtn from '../button/SearchBtn';
import ThemeBtn from '../button/ThemeBtn';
import useGoToPage from '../../hooks/useToPage';
import LanguageBtn from '../button/LanguageBtn';

const NavContainer = styled.nav``;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Nav = () => {
  const goToPage = useGoToPage('/search');

  return (
    <NavContainer>
      <MenuList>
        <li>
          <LanguageBtn />
        </li>
        <li>
          <SearchBtn onClick={goToPage} />
        </li>
        <li>
          <ThemeBtn />
        </li>
      </MenuList>
    </NavContainer>
  );
};

export default Nav;
