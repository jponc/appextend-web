import React from "react";
import { LoginScreen } from "./screens/LoginScreen";
import { AppRouter } from "./AppRouter";
import { useUser } from "./context/UserContext";
import { Loading } from "./components/Loading";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useFeedback, FeedbackTypes } from "./context/FeedbackContext";

export const Main = () => {
  const { token, doneCheckingAuth } = useUser();
  const { message, type, open, close } = useFeedback();
  const isLoggedIn = token.length > 0;

  if (!doneCheckingAuth) {
    return <Loading />;
  }

  return (
    <>
      <div className="s-main">
        {isLoggedIn ? <AppRouter /> : <LoginScreen />}
      </div>

      <Snackbar open={open} autoHideDuration={1000} onClose={() => close()} onExited={() => close()}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={() => close()}
          severity={type === FeedbackTypes.Success ? "success" : "error"}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};
