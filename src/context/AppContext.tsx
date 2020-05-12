import React from "react";
import { UserProvider } from "./UserContext";
import { PreferencesProvider } from "./PreferencesContext";
import { FeedbackProvider } from "./FeedbackContext";

const AppProviders: React.FC = ({ children }) => {
  return (
    <PreferencesProvider>
      <FeedbackProvider>
        <UserProvider>{children}</UserProvider>
      </FeedbackProvider>
    </PreferencesProvider>
  );
};

export { AppProviders };
