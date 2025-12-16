import { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState(null);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * 하위 컴포넌트에서 사용하는 예시 
 * import { AuthContext } from './contexts/AuthContext.js'
 * const { user } = useContext(AuthContext);
 */