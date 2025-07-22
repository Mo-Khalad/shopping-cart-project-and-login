import React ,{useContext} from "react";
import { DisplayContext } from "../../Store/DisplayContext.js";
const InputData = ({Regex , errorSign , handleBlue , name , handleChange , type , 
className, id , value , error})=>{   
const DisplayCrx=useContext(DisplayContext)

console.log(DisplayCrx.error);

return (
    <>
     <input
      className={`${className}`}
      name={name}
      type={type}
      id={id}
      placeholder={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlue}
    />
     { DisplayCrx.error &&
       errorSign && !Regex.test(value) &&
        <>
        <h2 className="errorLoginAndRegister mt-2">{error}</h2> 
        </>
}    
</> )
};
export default InputData;
