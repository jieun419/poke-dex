import styled from 'styled-components';
import SearchBtn from '../button/SearchBtn';
import ThemeBtn from '../button/ThemeBtn';

const NavContainer = styled.nav``;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Nav = () => {
  return (
    <NavContainer>
      <MenuList>
        <li>
          <SearchBtn />
        </li>
        <li>
          <ThemeBtn />
        </li>
      </MenuList>
    </NavContainer>
  );
};

export default Nav;
