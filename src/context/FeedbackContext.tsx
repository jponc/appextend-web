import React, { useContext, createContext, useState } from "react";

export enum FeedbackTypes {
  Success = "success",
  Error = "error",
}

type FeedbackContextType = {
  message: string;
  type: string;
  open: boolean;
  setError: (message: string) => void;
  setSuccess: (message: string) => void;
  close: () => void;
};

const FeedbackContext = createContext<FeedbackContextType>({
  message: "",
  type: FeedbackTypes.Success,
  open: false,
  setError: (_message: string) => {},
  setSuccess: (_message: string) => {},
  close: () => {},
});

const FeedbackProvider: React.FC = (props) => {
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<FeedbackTypes>(FeedbackTypes.Success);
  const [open, setOpen] = useState<boolean>(false);

  const setError = (message: string) => {
    setMessage(message);
    setOpen(true);
    setType(FeedbackTypes.Error);
  };

  const setSuccess = (message: string) => {
    setMessage(message);
    setOpen(true);
    setType(FeedbackTypes.Success);
  };

  const close = () => {
    setOpen(false);
  };

  const contextValue = {
    message,
    type,
    open,
    setError,
    setSuccess,
    close,
  };

  return <FeedbackContext.Provider value={contextValue} {...props} />;
};

const useFeedback = () => useContext(FeedbackContext);
export { FeedbackProvider, useFeedback };
