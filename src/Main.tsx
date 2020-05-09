import React from "react";
import { LoginScreen } from "./screens/LoginScreen";
import { AppRouter } from "./AppRouter";
import { useUser } from "./context/UserContext";

export const Main = () => {
  const { token, doneCheckingAuth } = useUser();
  const isLoggedIn = token.length > 0;

  if (!doneCheckingAuth) {
    return <div className="s-main">Some loading animation here..</div>;
  }

  return (
    <div className="s-main">{isLoggedIn ? <AppRouter /> : <LoginScreen />}</div>
  );
};
