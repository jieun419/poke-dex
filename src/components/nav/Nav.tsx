import styled from 'styled-components';
import SearchBtn from '../button/SearchBtn';
import ThemeBtn from '../button/ThemeBtn';
import { useDispatch, useSelector } from 'react-redux';
import { themeActions } from '../../store/theme-slice';
import { RootState } from '../../store';

const NavContainer = styled.nav``;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Nav = () => {
  const dispatch = useDispatch();
  const ThemeMode = useSelector((state: RootState) => state.themeType.themeMode);

  const themeSave = (value: 'light' | 'dark') => {
    localStorage.setItem('THEME', value);
  };

  const handlerTheme = () => {
    if (!ThemeMode) return;
    if (ThemeMode === 'dark') {
      dispatch(themeActions.toggleLightMode());
      themeSave('light');
    } else {
      dispatch(themeActions.toggleDarkMode());
      themeSave('dark');
    }
  };

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
