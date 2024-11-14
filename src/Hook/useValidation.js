import { useReducer, useState } from "react";
import { checkValidationFormInput } from "../Logic/logic.js";
const inputFormReducer=(state, { type, payload })=>{
   return checkValidationFormInput(state, { type, payload })  
}
const didEditReducer=(state, { type, payload })=>{
    return checkValidationFormInput(state, { type, payload })  
}
export const useValidation=(objectFormSign)=>{
    const [dataSign, inputFormDispatch] = useReducer(inputFormReducer, objectFormSign);
    const [errorSign, errorDispatch] = useReducer(didEditReducer, objectFormSign );
    const [inputFormObject  , setInputFormObject ] = useState(objectFormSign)
const handleSubmit = (event ) => {
   event.preventDefault();  
      errorDispatch({
      type: "submit",
      payload:true ,
    });  
    const formObjectData=new FormData(event.target);
    const object = Object.fromEntries(formObjectData.entries())
    setInputFormObject(object);
};
const handleChange = (element, event) => {  
  inputFormDispatch({
    type: element,
    payload: event.target.value,
  }
);
    errorDispatch({
      type: element,
      payload: false,
    });
};
const handleBlue = (element) => {    
    errorDispatch({
      type: element,
      payload: true,
    });
};
const signInObject={
    handleSubmit ,
    handleChange ,
    handleBlue ,
    dataSign,
    errorSign,
    inputFormObject
}
return { signInObject }
}