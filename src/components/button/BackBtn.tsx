import styled from 'styled-components';
import BackArrow from '../../assets/icons/BackArrow';

interface PropsT {
  onClick: () => void;
}
const BackButton = styled.button``;

const BackBtn = ({ onClick }: PropsT) => {
  return (
    <BackButton onClick={onClick}>
      <BackArrow />
    </BackButton>
  );
};

export default BackBtn;
