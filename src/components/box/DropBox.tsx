import styled from 'styled-components';

interface PropsT {
  actionFn: () => void;
}

const DropBoxWrap = styled.div`
  position: fixed;
  background-color: #000;
  opacity: 0.6;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

const DropBox = ({ actionFn }: PropsT) => {
  return <DropBoxWrap onClick={actionFn} />;
};

export default DropBox;
