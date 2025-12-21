import { Link } from 'react-router-dom';
import { useModal } from 'contexts/ModalContext';
import 'styles/Header.css';
import PlayLogLogo from 'assets/playlog.svg';

const Header = () => {
  const { openModal } = useModal();
  return (
    <header className="header">
      <div className="wrapper">
        
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
          <button onClick={() => openModal('Login')} className="link">로그인</button>
          
        </nav>

        <div className="setting">

        </div>
      </div>
    </header>
  );
};

export default Header;