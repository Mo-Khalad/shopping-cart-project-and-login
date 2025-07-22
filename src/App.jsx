import React, { useContext } from "react";
import Cart from "./Component/Cart/Cart.jsx";
import CheckOut from "./Component/CheckOut/CheckOut.jsx";
import Login from "./Component/Login/Login.jsx";
import Register from "./Component/Register/Register.jsx";
import Navbar from "./Component/Header/Navbar/Navbar.jsx";
import MainNavbar from "./Component/Header/MainNavbar/MainNavbar.jsx";
import DetailsProducts from "./Component/DetailsProduct/DetailsProducts.jsx";
import MainContent from "./Component/MainContent/MainContent.jsx";
import { DisplayContext } from "./Store/DisplayContext.js";

const App = () => {
  const { pageShow } = useContext(DisplayContext);
  const nameRegex = /^[A-Za-z]{3}/;
  const emailRegex = /@gmail.com/;
  const ageRegex = /^[0-9]{11}/;
  const passwordRegex = /^[A-Z0-9a-z]/;  

 const UserData = JSON.parse(localStorage.getItem("UserData"))
       
  return (
    <> 
      <>
       <Navbar open={UserData === "success" ? "hide" : ""} />
        <Login
          passwordRegex={passwordRegex}
          emailRegex={emailRegex}
          open={
            (UserData === "success"|| pageShow === "login") &&
            UserData !== "success" 
              ? "d-flex"
              : "hide"
          }
        />
        <Register
          nameRegex={nameRegex}
          passwordRegex={passwordRegex}
          emailRegex={emailRegex}
          ageRegex={ageRegex}
          open={
            UserData === "success" || pageShow === "login" ?'hide' : "d-flex" 
          }
        />
        {UserData === "success" && (
          <>
            <MainNavbar />
            <Cart />
            <CheckOut />
            {( pageShow === "detailsProduct" || pageShow=== 'cart')? (
              <DetailsProducts />
            ) : (
              <MainContent />
            )}
          </>
        )}
      </>
    </>
  );
};

export default App;


