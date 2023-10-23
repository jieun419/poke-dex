import styled from 'styled-components';
import logo from '../../assets/images/nav_logo.png';
import Nav from '../nav/Nav';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 6.25rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h2>
        <img src={logo} alt="logo" />
      </h2>
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
