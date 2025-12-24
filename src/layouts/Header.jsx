import 'styles/Header.css';

import { Link } from 'react-router-dom';
import { useModal } from 'contexts/ModalContext';
import PlayLogLogo from 'assets/playlog.svg';
import Button from 'components/Button';

const Header = (theme) => {
  const { openModal } = useModal();
  return (
    <header className="header">
      <div className="wrapper" data-theme={theme="black"}>
        
        <Link to="/" className="link">
          <img src={PlayLogLogo} alt="playlog-icon" />
        </Link>
        <Link to="/" className="link app-name">
          PlayLog
        </Link>
        <div className="search">

        </div>
        <nav className="nav">
          <Link to="/games/new" className="link">신작 게임</Link>
          <Link to="/games/popular" className="link">인기 게임</Link>
          <Button className="link" type="header" handleClick={()=>{openModal('Login');}}>로그인</Button>
        </nav>

        <div className="setting">

        </div>
      </div>
    </header>
  );
};

export default Header;