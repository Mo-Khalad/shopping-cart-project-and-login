import { createContext } from "react";
export const DisplayContext = createContext({
    handlePageShow:()=>{},
    pageShow:'',
    hideError:()=>{},
    showError:()=>{},
    error:'',
    getProductId:()=>{},
    productId:'',
    getMessage:()=>{},
    message:'',
    handleModalShow:()=>{},
    modalShow:''
})
