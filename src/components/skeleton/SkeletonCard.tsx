import styled, { keyframes } from 'styled-components';

const load = keyframes`
  100% {
    background-position: -100% 0;
  }
`;

const SkeletonWrap = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: linear-gradient(90deg, #e5e5e5 30%, #f0f0f0 30%, #f0f0f0 30%, #e5e5e5 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: ${load} 1.5s infinite;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-color: #ccc;
`;

const SkeletonCard = () => {
  return (
    <>
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
      <SkeletonWrap />
    </>
  );
};

export default SkeletonCard;
