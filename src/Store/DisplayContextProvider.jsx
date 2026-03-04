import React from "react";
import { useState } from "react";
import { DisplayContext } from "./DisplayContext.js";

const DisplayContextProvider = ({ children }) => {
  const [pageShow, setPageShow] = useState("login");
  const [modalShow, setModalShow] = useState("");

  const [error, setError] = useState(true);
  const [productId, setProductId] = useState("");
  const getProductId = (id) => {
    setProductId(id);
  };
  const handleModalShow =(modal)=>{
    setModalShow(modal)
  }
  const handlePageShow = (page) => {
    setPageShow(page);
    showError();
  };
  const showError = () => {
    setError(true);
  };
  const hideError = () => {
    setError(false);
  };
  
  const DisplayCrx = {
    handlePageShow,
    pageShow,
    hideError,
    showError,
    error,
    getProductId,
    productId,
    handleModalShow,
    modalShow
  };
  return (
    <DisplayContext.Provider value={DisplayCrx}>
      {children}
    </DisplayContext.Provider>
  );
};

export default DisplayContextProvider;
