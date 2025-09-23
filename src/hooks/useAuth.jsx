import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { authenticate, registration } from "../api/auth";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useLocalStorage("user", null);
  const login = async (credentials) => {
    await authenticate(credentials).then((response) => {
      setUser(response.datos);
    }).catch((error) => {
      console.log(error);
      setUser(null);
    });
  }
  const signin = async (credentials) => {
    await registration(credentials).then((response) => {
      setUser(response);
    }).catch((error) => {
      console.log(error);
      setUser(null);
    })
  }
  const logout = () => {
    setUser(null);
  }
  const value = useMemo(() => ({
    user,
    login,
    signin,
    logout
}),
  [user]
  );
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
}