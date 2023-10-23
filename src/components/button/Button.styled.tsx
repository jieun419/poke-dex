import styled from 'styled-components';

export const CircleButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 100%;
  height: 100%;
  padding: 10px;
  transition: 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;
