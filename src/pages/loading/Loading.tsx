import styled, { keyframes } from 'styled-components';
import pokeball from '../../assets/images/nav_logo.png';

const LoadingContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100vh;
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

const LoadingText = styled.p`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-shadow:
    -2px 0 #1e2c5f,
    0 2px #1e2c5f,
    2px 0 #ed1b24,
    0 -2px #ed1b24;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <ImgLoading>
        <img src={pokeball} loading="lazy" alt="포켓볼 이미지" />
      </ImgLoading>
      <LoadingText>포켓몬을 불러오고 있어요</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
