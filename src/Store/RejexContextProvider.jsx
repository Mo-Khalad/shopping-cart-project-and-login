import React from "react";
import { RejexContext } from "./RejexContext.js";
const RejexContextProvider = ({ children }) => {
  const nameRejex = /^[A-Za-z]{3}/;
  const emailRejex = /@com/;
  const ageRejex = /^([1-5][0-9]|60)$/;
  const passwordRejex = /^[0-9]{4,10}$/;
  const rejex = {
    nameRejex: nameRejex,
    emailRejex: emailRejex,
    ageRejex: ageRejex,
    passwordRejex: passwordRejex,
  };
  return (
    <RejexContext.Provider value={rejex}>{children}</RejexContext.Provider>
  );
};
export default RejexContextProvider;
