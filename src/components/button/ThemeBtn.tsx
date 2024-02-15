import { useSelector } from 'react-redux';
import Sun from '../../assets/icons/Sun';
import Moon from '../../assets/icons/Moon';
import { CircleButton, IcAnime } from './Button.styled';
import { RootState } from '../../store';
import useToggleTheme from '../../hooks/useToggleTheme';

const ThemeBtn = () => {
  const handlerTheme = useToggleTheme();

  const ThemeMode = useSelector((state: RootState) => state.themeType.themeMode);
  const isDarkMode = ThemeMode === 'dark';
  return (
    <CircleButton onClick={handlerTheme} name="theme button">
      {isDarkMode ? (
        <IcAnime>
          <Moon />
        </IcAnime>
      ) : (
        <IcAnime>
          <Sun />
        </IcAnime>
      )}
    </CircleButton>
  );
};

export default ThemeBtn;
