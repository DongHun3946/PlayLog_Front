import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserLayout from 'layouts/UserLayout';
import AdminLayout from 'layouts/AdminLayout';

import { ModalProvider } from 'contexts/ModalContext';
import { ThemeProvider } from 'contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            {/* 일반 사용자 */}
            <Route element={<UserLayout/>}>
              <Route path="/games/new" element={<></>}/>
              <Route path="/games/popular" element={<></>}/>
              <Route path="" element={<></>}/>
            </Route>

            {/* 관리자 */}
            <Route element={<AdminLayout/>}>
              <Route path="/games/upcoming" element={<></>}/>
              <Route path="" element={<></>}/>
              <Route path="" element={<></>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
