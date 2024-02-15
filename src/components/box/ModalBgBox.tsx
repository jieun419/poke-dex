import styled from 'styled-components';

interface ColorT {
  color: string;
}

const BgBox = styled.div<ColorT>`
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 55vh);
  background-color: ${({ color }) => (color ? color : '#fff')};
  opacity: 0.2;
  position: absolute;
  border-bottom: 1px solid #000;
  z-index: -1;
`;

const ModalBgBox = ({ color }: ColorT) => {
  return <BgBox color={color} />;
};

export default ModalBgBox;
