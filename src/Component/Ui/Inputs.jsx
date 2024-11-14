import React ,{useContext} from "react";
import { DisplayContext } from "../../Store/DisplayContext.js";
const InputData = ({Rejex , errorSign , handleBlue , name , handleChange , type , 
className, id , value , error})=>{   
const DisplayCrx=useContext(DisplayContext)
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
     { DisplayCrx.errors=== true &&
     errorSign && !Rejex.test(value) &&
        <>
        <h2 className="errorLoginAndRegister mt-2">{error}</h2> 
        </>
}    
</> )
};
export default InputData;
