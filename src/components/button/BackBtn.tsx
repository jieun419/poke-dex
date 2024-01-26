import styled from 'styled-components';
import BackArrow from '../../assets/icons/BackArrow';

interface PropsT {
  handlerModal: () => void;
}
const BackButton = styled.button``;

const BackBtn = ({ handlerModal }: PropsT) => {
  return (
    <BackButton onClick={handlerModal}>
      <BackArrow />
    </BackButton>
  );
};

export default BackBtn;
