import Search from '../../assets/icons/Search';
import Sun from '../../assets/icons/Sun';
import logo from '../../assets/images/nav_logo.png';

const Header = () => {
  return (
    <header>
      <h2>
        <img src={logo} alt="logo" />
      </h2>
      <nav>
        <ul>
          <li>
            <button>
              <Search />
            </button>
          </li>
          <li>
            <button>
              <Sun />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
