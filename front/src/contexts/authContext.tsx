import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { fetchOrganization } from "../backend";

interface AuthContextProps {
  organization: any;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUserData = async () => {
    const response = await fetchOrganization(1);
    setUser(response);
  };

  useEffect(() => {
    setTimeout(() => {
      getUserData();
    }, 300);
  }, []);

  return (
    <AuthContext.Provider value={{ organization: user }}>
      {children}
    </AuthContext.Provider>
  );
};
