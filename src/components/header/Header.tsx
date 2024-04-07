import styled from 'styled-components';
import logo from '../../assets/images/nav_logo.png';
import Nav from '../nav/Nav';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 6.25rem;
  z-index: 10;
  background-color: var(--bg-color);

  &.scroll_header {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.03);
  }

  @media screen and (max-width: 1023px) {
    padding: 20px 1.2rem;
  }
`;

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const SCROLL_SIZE = scrollPosition < 80;

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, [SCROLL_SIZE]);

  return (
    <HeaderContainer className={SCROLL_SIZE ? '' : 'scroll_header'}>
      <Link to="/">
        <h2>
          <img src={logo} loading="lazy" alt="logo" />
        </h2>
      </Link>
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
