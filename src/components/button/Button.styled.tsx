import styled, { keyframes } from 'styled-components';

const iconAni = keyframes`
  0% {
    transform: rotate(0) scale(0);
    opacity: 0;
  }
  100% {
    transform: rotate(358deg) scale(1);  
    opacity: 1;
  }
`;

export const CircleButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 45px;
  height: 45px;
  padding: 10px;
  transition: 0.3s;

  &:hover {
    background-color: var(--icon-box-color);
  }
`;

export const IcAnime = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  animation: ${iconAni} 1s ease-in-out;
`;
