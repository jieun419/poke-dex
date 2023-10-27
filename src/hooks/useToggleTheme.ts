import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { themeActions } from '../store/theme-slice';

const useToggleTheme = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.themeType.themeMode);

  const themeSave = (value: 'light' | 'dark') => {
    localStorage.setItem('THEME', value);
  };

  const handlerTheme = () => {
    if (!themeMode) return;
    if (themeMode === 'dark') {
      dispatch(themeActions.toggleLightMode());
      themeSave('light');
    } else {
      dispatch(themeActions.toggleDarkMode());
      themeSave('dark');
    }
  };

  return handlerTheme;
};

export default useToggleTheme;
