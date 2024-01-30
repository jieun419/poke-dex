import styled from 'styled-components';
import StyleText from '../text/StyleText';

const NotingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  background-color: var(--box-color);
  border-radius: 10px;
`;

const NothingBox = () => {
  return (
    <NotingWrap>
      <StyleText>포켓몬이 없어요 :(</StyleText>
    </NotingWrap>
  );
};

export default NothingBox;
