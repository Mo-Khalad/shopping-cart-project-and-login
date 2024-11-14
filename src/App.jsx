import React, { useContext } from "react";
import RestaurantMeals from "./Component/MainContent/MainContent.jsx";
import CartContextProvider from "./Store/CartContextProvider.jsx";
import UserProgressContextProvider from "./Store/UserProgressContextProvider.jsx";
import Cart from "./Component/Cart/Cart.jsx";
import CheckOut from "./Component/CheckOut/CheckOut.jsx";
import Login from "./Component/Login/Login.jsx";
import Register from "./Component/Register/Register.jsx";
import Navbar from "./Component/Header/Navbar/Navbar.jsx";
import MainNavbar from "./Component/Header/MainNavbar/MainNavbar.jsx";
import DetailsProducts from "./Component/DetailsProduct/DetailsProducts.jsx";
import { DetailsProductContext } from "./Store/DetailsProductContext.js";
import MainContent from "./Component/MainContent/MainContent.jsx";
import { DisplayContext } from "./Store/DisplayContext.js";
import RejexContextProvider from "./Store/RejexContextProvider.jsx";

const App = () => {
  const { messageApi , showLogin } = useContext(DisplayContext);
  const { showDetailsProduct } = useContext(DetailsProductContext);
  /*
     <Login
            open={
              (messageApi === "success" || showLogin) &&
               messageApi !== "success"
                ? "d-flex"
                : "hide"
            }
          />
          <Register
            open={(messageApi === "success" || showLogin) ? "hide" : "d-flex"}
          />


         
        
   
*/
  return (
    <>
      <CartContextProvider>
        <UserProgressContextProvider>
        <RejexContextProvider>         
          <>
          <Navbar open={messageApi === "success" ? "hide" : ""} />

            <Login
              open={
                (messageApi === "success" || showLogin) &&
                messageApi !== "success"
                  ? "d-flex"
                  : "hide"
              }
            />
            <Register
              open={messageApi === "success" || showLogin ? "hide" : "d-flex"}
            />
            {messageApi === "success" && (
              <>
                <MainNavbar />
                <Cart />
                <CheckOut />
                {showDetailsProduct === false ? (
                  <MainContent />
                ) : (
                  <DetailsProducts />
                )}
              </>
            )}
          </>
          </RejexContextProvider> 
        </UserProgressContextProvider>
      </CartContextProvider>
    </>
  );
};

export default App;
