import styled from 'styled-components';
import mainLogo from '../../assets/images/main_logo.png';

const Img = styled.img`
  max-width: 500px;
  width: 100%;
  margin-bottom: 30px;
`;

const MainLogo = () => {
  return <Img src={mainLogo} alt="mainlogo" />;
};

export default MainLogo;
