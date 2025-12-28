import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'layouts/Header';
import SignupPage from 'pages/SignupPage';
import MainPage from 'pages/MainPage';
import { ModalProvider } from 'contexts/ModalContext';
import { ThemeProvider } from 'contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            {/* 메인 페이지 */}
            <Route path="/" element={<MainPage/>}/>

            {/* 인증 페이지 */}
            {/* <Route path="/login" element={<LoginPage/>}/> */}
            <Route path="/signup" element={<SignupPage/>}/>

            {/* 게임 페이지 */}
            <Route path="/games"/>

            {/* 리뷰 페이지 */}
            <Route path="/reviews"/>
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
