import styled from 'styled-components';
import DropBox from '../box/DropBox';
import Portal from '../portal';
import { ReactNode } from 'react';

const ModalContainer = styled.article`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 101;
`;

const Modal = ({ children, actionFn }: { children: ReactNode; actionFn: () => void }) => {
  return (
    <Portal>
      <ModalContainer>
        <ModalWrapper>{children}</ModalWrapper>
        <DropBox actionFn={actionFn} />
      </ModalContainer>
    </Portal>
  );
};

export default Modal;
