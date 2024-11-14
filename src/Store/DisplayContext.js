import { createContext } from "react";

export const DisplayContext = createContext({
    message:'',
    handleHideLogin:()=>{},
    handleShowLogin:()=>{},
    showLogin:'',
    hideError:()=>{},
    showError:()=>{},
    errors:'',
})

