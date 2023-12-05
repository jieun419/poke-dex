import styled from 'styled-components';
import logo from '../../assets/images/nav_logo.png';
import Nav from '../nav/Nav';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 6.25rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <h2>
          <img src={logo} alt="logo" />
        </h2>
      </Link>
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
