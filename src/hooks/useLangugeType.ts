import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { languageActions } from '../store/language-slice';

const useLangugeType = () => {
  const dispatch = useDispatch();
  const languageMode = useSelector((state: RootState) => state.languageType.languageMode);
  const isLanguageKrMode = languageMode === 'ko';

  const languageSave = (value: 'ko' | 'en') => {
    localStorage.setItem('LANGUAGE', value);
  };

  const handlerLanguage = () => {
    if (!languageMode) return;
    if (languageMode === 'en') {
      dispatch(languageActions.toggleKrMode());
      languageSave('ko');
    } else {
      dispatch(languageActions.toggleEnMode());
      languageSave('en');
    }
  };

  return { handlerLanguage, isLanguageKrMode };
};

export default useLangugeType;
