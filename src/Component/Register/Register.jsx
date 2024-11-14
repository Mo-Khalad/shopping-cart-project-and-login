import React, { useContext, useEffect, useState } from "react";
import imgLogin from "../../images/img-Login.jpg";
import Inputs from "../Ui/Inputs.jsx";
import Button from "../Ui/Button.jsx";
import { RejexContext } from "../../Store/RejexContext.js";
import { useValidation } from "../../Hook/useValidation.js";
import { useHttp } from "../../Hook/usehttp.js";
import { DisplayContext } from "../../Store/DisplayContext.js";
const Register = ({ open }) => {
  const [method, setMethod] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const Rejex = useContext(RejexContext);
  const DisplayCrx =useContext(DisplayContext)
  const formInputs = {
    first_name: "",
    last_name: "",
    email: "",
    age: "",
    password: "",
  };
  const { signInObject } = useValidation(formInputs);
  const { data } = useHttp(
    "https://movies-api.routemisr.com/signup",
    method,
    signInObject.inputFormObject
  );

  const firstNameRejex = Rejex.nameRejex.test(signInObject.dataSign.first_name);
  const lastNameRejex = Rejex.nameRejex.test(signInObject.dataSign.last_name);
  const emailRejex = Rejex.emailRejex.test(signInObject.dataSign.email);
  const ageRejex = Rejex.ageRejex.test(signInObject.dataSign.age);
  const passwordRejex = Rejex.passwordRejex.test(
    signInObject.dataSign.password
  );

  useEffect(() => {
    if (
      signInObject.dataSign.first_name &&
      signInObject.dataSign.last_name !== "" &&
      signInObject.dataSign.email !== "" &&
      signInObject.dataSign.age !== "" &&
      signInObject.dataSign.password !== ""
    ) {
      if (
        firstNameRejex &&
        lastNameRejex &&
        emailRejex &&
        ageRejex &&
        passwordRejex
      ) {
        setMethod("post");
        setErrorMessage(true);
      }
    }
  } ,[signInObject.inputFormObject])  
   
 useEffect(()=>{ if (data?.message === "success") {
  DisplayCrx.handleShowLogin();
  DisplayCrx.hideError();
      setMethod(data?.message);
      signInObject.dataSign.first_name = "";
      signInObject.dataSign.last_name = "";
      signInObject.dataSign.email = "";
      signInObject.dataSign.age = "";
      signInObject.dataSign.password = "";
    }
  }, [data]);

  const handleChange = (value, event) => {
    setErrorMessage(false);
    signInObject.handleChange(value, event);
  };
  return (
    <>
      <div
        className={`coverLoginAndRegister flex-wrap w-100 ${open} justify-content-around align-items-center  `}
      >
        <form
          onSubmit={signInObject.handleSubmit}
          className={`coverFromLoginAndRegister d-flex flex-wrap rounded justify-content-center
          align-items-center`}
        >
          <Inputs
            name="first_name"
            handleChange={(event) => handleChange("first_name", event)}
            type="text"
            value={signInObject.dataSign.first_name}
            id="first_name"
            handleBlue={() => signInObject.handleBlue("first_name")}
            errorSign={signInObject.errorSign.first_name}
            error={"The name must start be at least three letters"}
            Rejex={Rejex.nameRejex}
            className="inputsFromLoginAndRegister"
          />
          <Inputs
            className="inputsFromLoginAndRegister"
            name="last_name"
            handleChange={(event) => handleChange("last_name", event)}
            type="text"
            value={signInObject.dataSign.last_name}
            id="last_name"
            handleBlue={() => signInObject.handleBlue("last_name")}
            errorSign={signInObject.errorSign.last_name}
            error={"The name must start be at least three letters"}
            Rejex={Rejex.nameRejex}
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
            Rejex={Rejex.emailRejex}
          />
          <Inputs
            className="inputsFromLoginAndRegister"
            name="age"
            handleBlue={() => signInObject.handleBlue("age")}
            handleChange={(event) => handleChange("age", event)}
            type="number"
            value={signInObject.dataSign.age}
            id="age"
            errorSign={signInObject.errorSign.age}
            error={"must Age from 15 to 60"}
            Rejex={Rejex.ageRejex}
          />
          <Inputs
            id="password"
            name="password"
            className="inputsFromLoginAndRegister"
            handleChange={(event) => {
              handleChange("password", event);
            }}
            handleBlue={() => signInObject.handleBlue("password")}
            type="password"
            value={signInObject.dataSign.password}
            error={
              "It must be no less than 4 numbers and no more than 9 numbers"
            }
            errorSign={signInObject.errorSign.password}
            Rejex={Rejex.passwordRejex}
          />
          {errorMessage && data?.message !== "success" && (
            <h2 className="errorLoginAndRegister"> {data?.message}</h2>
          )}
          <Button className="main-color"
            onClick={() => {
              DisplayCrx.showError();
            }}
          >
            Login
          </Button>
        </form>
        <img src={imgLogin} alt="img-login" width={350} />
      </div>
    </>
  );
};
export default Register;
