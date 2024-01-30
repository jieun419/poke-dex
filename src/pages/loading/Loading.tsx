import styled, { keyframes } from 'styled-components';
import pokeball from '../../assets/images/nav_logo.png';
import StyleText from '../../components/text/StyleText';

const LoadingContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100vh;
  width: 100%;
`;
const LdsHourglass = keyframes`
  0% {
  transform: rotate(0);
  animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

const ImgLoading = styled.div`
  animation: ${LdsHourglass} 1.2s infinite;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <ImgLoading>
        <img src={pokeball} loading="lazy" alt="포켓볼 이미지" />
      </ImgLoading>
      <StyleText>포켓몬을 불러오고 있어요</StyleText>
    </LoadingContainer>
  );
};

export default Loading;
