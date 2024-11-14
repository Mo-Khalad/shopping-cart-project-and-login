import React, { useState } from "react";
import { DetailsProductContext } from "./DetailsProductContext";
const DetailsProductContextProvider = ({ children }) => {
  const [productId, setProductId] = useState("");
  const [showDetailsProduct, setShowDetailsProduct] = useState(false);
  const getProductId = (id) => {
    setProductId(id);
  };
 const handleShowDetailsProduct=(show)=>{
    setShowDetailsProduct(show)
 }
  return (
    <DetailsProductContext.Provider
      value={{
        getProductId,
        productId,
        handleShowDetailsProduct,
        showDetailsProduct
      }}
    >
      {children}
    </DetailsProductContext.Provider>
  );
};

export default DetailsProductContextProvider;
