import React, { useContext, useEffect, useState } from "react";
import imgLogin from "../../images/img-Login.jpg";
import Inputs from "../Ui/Inputs.jsx";
import Button from "../Ui/Button.jsx";
import { RejexContext } from "../../Store/RejexContext.js";
import { useValidation } from "../../Hook/useValidation.js";
import { useHttp } from "../../Hook/usehttp.js";
import { DisplayContext } from "../../Store/DisplayContext.js";
const formInputs = {
  email: "",
  password: "",
};
const Login = ({ open }) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const Rejex = useContext(RejexContext);
  const DisplayCrx =useContext(DisplayContext)
  const [method, setMethod] = useState("");
  const { signInObject } = useValidation(formInputs);
  const { data } = useHttp(
    "https://movies-api.routemisr.com/signin",
    method,
    signInObject.inputFormObject
  );
  const emailRejex = Rejex.emailRejex.test(signInObject.dataSign.email);
  const passwordRejex = Rejex.passwordRejex.test(
    signInObject.dataSign.password
  );
  useEffect(() => {
    if (
      signInObject.dataSign.email !== "" &&
      signInObject.dataSign.password !== ""
    ) {
      if (emailRejex && passwordRejex) {
        setMethod("post");
        setErrorMessage(true);
      }
    }
  },[signInObject.inputFormObject])
  useEffect(() => {
     if (data?.message === "success") {
      DisplayCrx.handleShowLogin();
      DisplayCrx.hideError();
      DisplayCrx.getMessageApi(data?.message);
      setMethod(data?.message);
    }
  }, [data]);

  const handleChange = (value, event) => {
    setErrorMessage(false);
    signInObject.handleChange(value, event);
  };
  return (
    <>
      <div
        className={`coverLoginAndRegister ${open} flex-wrap w-100 justify-content-around
       align-items-center`}
      >
        <form
          onSubmit={signInObject.handleSubmit}
          className={`coverFromLoginAndRegister d-flex flex-wrap rounded justify-content-center align-items-center`}
        >
          <Inputs
            name="email"
            handleChange={(event) => handleChange("email", event)}
            handleBlue={() => signInObject.handleBlue("email")}
            type="email"
            value={signInObject.dataSign.email}
            id="email"
            errorSign={signInObject.errorSign.email}
            error={"email is not valid add @.com"}
            Rejex={Rejex.emailRejex}
            className="inputsFromLoginAndRegister "
          />
          <Inputs
            id="password"
            name="password"
            handleChange={(event) => handleChange("password", event)}
            value={signInObject.dataSign.password}
            handleBlue={() => signInObject.handleBlue("password")}
            className="inputsFromLoginAndRegister"
            type="password"
            error={
              "It must be no less than 4 numbers and no more than 9 numbers"
            }
            errorSign={signInObject.errorSign.password}
            Rejex={Rejex.passwordRejex}
          />
          {signInObject.messageLogin === "incorrect password" ||
            (DisplayCrx.errorMessage && data?.message !== "success" && (
              <h2 className="errorLoginAndRegister fs">{data?.message}</h2>
            ))}
            
          <Button className="main-color" onClick={DisplayCrx.showError}>
            Login
          </Button>
          <Button className="main-color"
            onClick={() => {
              DisplayCrx.handleHideLogin();
              DisplayCrx.hideError();
            }}
          >
            Register
          </Button>
        </form>
        <img src={imgLogin} alt="img-login" width={350} />
      </div>
    </>
  );
};

export default Login;
