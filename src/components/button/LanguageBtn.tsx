import styled from 'styled-components';
import { CircleButton } from './Button.styled';

const TextIc = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #414443;
`;

const LanguageBtn = () => {
  return (
    <CircleButton name="language button">
      <TextIc>A</TextIc>
    </CircleButton>
  );
};

export default LanguageBtn;
