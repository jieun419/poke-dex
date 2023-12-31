import styled from 'styled-components';
import SearchBtn from '../button/SearchBtn';
import ThemeBtn from '../button/ThemeBtn';
import useToggleTheme from '../../hooks/useToggleTheme';

const NavContainer = styled.nav``;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Nav = () => {
  const handlerTheme = useToggleTheme();
  return (
    <NavContainer>
      <MenuList>
        <li>
          <SearchBtn />
        </li>
        <li>
          <ThemeBtn handlerTheme={handlerTheme} />
        </li>
      </MenuList>
    </NavContainer>
  );
};

export default Nav;
