import React, { useContext, useEffect, useState } from "react";
import Inputs from "../Ui/Inputs.jsx";
import Button from "../Ui/Button.jsx";
import { useValidation } from "../../Hook/useValidation.js";
import { useHttp } from "../../Hook/usehttp.js";
import { DisplayContext } from "../../Store/DisplayContext.js";
const Register = ({ open , nameRegex , emailRegex , passwordRegex , ageRegex }) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const DisplayCrx =useContext(DisplayContext)
  const formInputs = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  };
  
  const { signInObject } = useValidation(formInputs);
  const { data , sendRequest } = useHttp(
    "https://ecommerce.routemisr.com/api/v1/auth/signup" ,
    'post' ,
  );
console.log(formInputs);

  const name = nameRegex.test(signInObject.dataSign.name);
  const rePassword = passwordRegex.test(signInObject.dataSign.rePassword);
  const email = emailRegex.test(signInObject.dataSign.email);
  const phone = ageRegex.test(signInObject.dataSign.phone);
  const password = passwordRegex.test(
    signInObject.dataSign.password
  );
console.log(data)

  useEffect(() => {
    console.log(data?.message)

    if (data?.message === "success") {
      DisplayCrx.handlePageShow("login");
      signInObject.dataSign.name = '' ;
      signInObject.dataSign.rePassword = '' ;
      signInObject.dataSign.email = "";
      signInObject.dataSign.phone = "" ;
      signInObject.dataSign.password = "";

    }
  }, [data , signInObject.dataSign , DisplayCrx]);

  const handleChange = (value, event) => {
    setErrorMessage(false);
    signInObject.handleChange(value, event);
  };
  const handleSubmit=(event)=>{
    console.log(event);
    
    signInObject.handleSubmit(event);    
    const formObjectData = new FormData(event.target);
    const customerData = Object.fromEntries(formObjectData.entries());
    
    ( email && password && phone && name && rePassword && ( data?.message!== 'success' )) && sendRequest(customerData);
    DisplayCrx.showError();   
    setErrorMessage(true)
  }
  
  return (
    <>
      <div
        className={`coverLoginAndRegister flex-wrap w-100 ${open} justify-content-around align-items-center  `}
      >
       <div className="cover"></div>
       
        <form
          onSubmit={handleSubmit}
          className={`coverFromLoginAndRegister d-flex flex-wrap rounded justify-content-center
          align-items-center`}
        >
          <h3 className="fs-2 p-3 text-center main-color w-100 fw-bolder text-login">
            Register
          </h3>
          <Inputs
            name="name"
            handleChange={(event) => handleChange("name", event)}
            type="text"
            value={signInObject.dataSign.name}
            id="name"
            handleBlue={() => signInObject.handleBlue("name")}
            errorSign={signInObject.errorSign.name}
            error={"The name must start be at least three letters"}
            Regex={nameRegex}
            className="inputsFromLoginAndRegister"
          />
          <Inputs
            className="inputsFromLoginAndRegister"
            name="rePassword"
            handleChange={(event) => handleChange("rePassword", event)}
            type="text"
            value={signInObject.dataSign.rePassword}
            id="rePassword"
            handleBlue={() => signInObject.handleBlue("rePassword")}
            errorSign={signInObject.errorSign.rePassword}
            error={"The name must start be at least three letters"}
            Regex={passwordRegex}
          />
          <Inputs
            className="inputsFromLoginAndRegister"
            name="email"
            handleChange={(event) => handleChange("email", event)}
            handleBlue={() => signInObject.handleBlue("email")}
            type="email"
            value={signInObject.dataSign.email}
            id="email"
            errorSign={signInObject.errorSign.email}
            error={"email is not valid add @.com"}
            Regex={emailRegex}
          />
          <Inputs
            className="inputsFromLoginAndRegister"
            name="phone"
            handleBlue={() => signInObject.handleBlue("phone")}
            handleChange={(event) => handleChange("phone", event)}
            type="text"
            value={signInObject.dataSign.phone}
            id="phone"
            errorSign={signInObject.errorSign.phone}
            error={"must phone start 011 or 012 or 010"}
            Regex={ageRegex}
          />
          <Inputs
            id="password"
            name="password"
            className="inputsFromLoginAndRegister"
            handleChange={(event) => {
              handleChange("password", event);
            }}
            handleBlue={() => signInObject.handleBlue("password")}
            type="text"
            value={signInObject.dataSign.password}
            error={
              "It must be at least 4 characters long and begin with a capital letter"
            }
            errorSign={signInObject.errorSign.password}
            Regex={passwordRegex}
          />
          {errorMessage && data?.message !== "success" && (
            <h2 className="errorLoginAndRegister"> {data?.message}</h2>
          )}
          <Button className="sub-color bg-main">
            register
          </Button>
        </form>
      </div>
    </>
  );
};
export default Register;










