import { createContext } from "react";
export const DisplayContext = createContext({
    hideError:()=>{},
    showError:()=>{},
    error:'',
    getProductId:()=>{},
    productId:'',
    handleModalShow:()=>{},
    modalShow:'',
})
