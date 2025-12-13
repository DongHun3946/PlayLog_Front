import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/"/>

          {/* 인증 페이지 */}
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>

          {/* 게임 페이지 */}
          <Route path="/games"/>

          {/* 리뷰 페이지 */}
          <Route path="/reviews"/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
