import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService, User } from "../services/userService";

interface AuthContextType {
  //   token: string | null;
  isAuthenticated: boolean;
  user: User | null;
  login: (callback: () => void) => void;
  logout: (callback: () => void) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>({
  // token: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
  user: null,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  //   const [token, setToken] = useState<string | null>(localStorage.getItem("authToken"));

  //   useEffect(() => {
  //     const storedToken = localStorage.getItem("authToken");
  //     if (storedToken) {
  //       setToken(storedToken);
  //     }
  //   }, []);

  // Initialize auth state from userService
  useEffect(() => {
    const storedUser = userService.getCurrentUser();
    const isAuth = userService.isAuthenticated();
    if (isAuth && storedUser) {
      setIsAuthenticated(true);
      setUser(storedUser);
    }
  }, []);

  const navigate = useNavigate();

  const login = (callback: () => void) => {
    // setToken(newToken);
    // localStorage.setItem("authToken", newToken);

    // TODO - modify with real auth
    setIsAuthenticated(true);
    const currentUser = userService.getCurrentUser();
    setUser(currentUser);
    console.log("User logged in");
    callback();
  };

  const logout = (callback: () => void) => {
    // setToken(null);
    // localStorage.removeItem("authToken");

    // TODO - modify with real logout
    setIsAuthenticated(false);
    setUser(null);
    console.log("User logged out");
    callback();
  };

  const contextValue = useMemo(
    () => ({
    //   token,
      login,
      logout,
      isAuthenticated,
      user
    //   isAuthenticated: !!token,
    }),
    [isAuthenticated, user]
    // [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth should be used inside an AuthProvider');
    }
    return context;
  }
