import React, { useContext, createContext, useState, useEffect } from "react";
import {
  login as loginAction,
  setTokenToStorage,
  getTokenFromStorage,
} from "../actions/auth";

type UserContextType = {
  token: string;
  doneCheckingAuth: boolean;
  login: (username: string, password: string) => void;
};

const UserContext = createContext<UserContextType>({
  token: "",
  doneCheckingAuth: false,
  login: () => {},
});

const UserProvider: React.FC = (props) => {
  const [token, setToken] = useState<string>("");
  const [doneCheckingAuth, setDoneCheckingAuth] = useState<boolean>(false);

  useEffect(() => {
    setToken(getTokenFromStorage());
    setDoneCheckingAuth(true);
  }, []);

  const login = async (username: string, password: string) => {
    const requestedToken = await loginAction(username, password);
    setToken(requestedToken);
    setTokenToStorage(requestedToken);
  };

  const contextValue = {
    token,
    doneCheckingAuth,
    login,
  };

  return <UserContext.Provider value={contextValue} {...props} />;
};

const useUser = () => useContext(UserContext);
export { UserProvider, useUser };
