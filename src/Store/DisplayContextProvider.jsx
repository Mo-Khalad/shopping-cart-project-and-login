import React from "react";
import { useState } from "react";
import { DisplayContext } from "./DisplayContext";

const DisplayContextProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [messageApi, setMessageApi] = useState("");
  //const [messageLogin, setMessageLogin] = useState(false);
  const [errors, setError] = useState(true);
  const handleShowLogin = () => {
    setShowLogin(true);
    showError();
  };
  const handleHideLogin = () => {
    setShowLogin(false);
    showError();
  };
  const getMessageApi = (message) => {
    setMessageApi(message);
  };
  /*
    const getMessageLogin = () => {
      setMessageLogin();
    };*/
  const showError = () => {
    setError(true);
  };
  const hideError = () => {
    setError(false);
  };

  const DisplayCrx = {
    message: messageApi,
    getMessageApi,
    handleHideLogin,
    handleShowLogin,
    showLogin,
    hideError,
    showError,
    errors: errors,
  };
  return (
    <DisplayContext.Provider value={DisplayCrx}>
      {children}
    </DisplayContext.Provider>
  );
};

export default DisplayContextProvider;
