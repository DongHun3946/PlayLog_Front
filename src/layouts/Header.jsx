import 'styles/Header.css';

import { Link } from 'react-router-dom';
import { useModal } from 'contexts/ModalContext';
import PlayLogLogo from 'assets/playlog.svg';
import Button from 'components/Button';

const Header = (theme) => {
  const { openModal } = useModal();
  return (
    <header className="PL-Nav" data-theme={theme="black"}>
      <div className="wrapper">
        <div className="title">
          <Link to="/" className="link">
            <img src={PlayLogLogo} alt="playlog-icon" />
          </Link>
          <Link to="/" className="link app-name">
            PlayLog
          </Link>
        </div>
        <div className="content">
          <div className="search">
            <form class="search-bar" onSubmit={(e)=>{
              e.preventDefault();
              //API 요청
            }}>
              <input className="search-input" type="text" placeholder='Search'/>
            </form>
          </div>

          <div className="nav">
            <Link to="/games/new" className="link">신작 게임</Link>
            <Link to="/games/popular" className="link">인기 게임</Link>
            <Button className="link" type="header" handleClick={()=>{openModal('Login');}}>로그인</Button>
          </div>

          <div className="setting">

          </div>
        </div>
       
        
        
      </div>
    </header>
  );
};

export default Header;