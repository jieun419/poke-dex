import styled from 'styled-components';
import { CircleButton } from './Button.styled';
import useLangugeType from '../../hooks/useLangugeType';

const TextIc = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: var(--icon-color);
`;

const LanguageBtn = () => {
  const { handlerLanguage, isLanguageKrMode } = useLangugeType();

  return (
    <CircleButton onClick={handlerLanguage} name="language button">
      {isLanguageKrMode ? <TextIc>한</TextIc> : <TextIc>A</TextIc>}
    </CircleButton>
  );
};

export default LanguageBtn;
