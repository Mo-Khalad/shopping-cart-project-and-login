import React from "react";
//import React, { useContext } from "react";
/*import Cart from "./Component/Cart/Cart.jsx";
import CheckOut from "./Component/CheckOut/CheckOut.jsx";
import Login from "./Component/Login/Login.jsx";
import Register from "./Component/Register/Register.jsx";
import Navbar from "./Component/Header/Navbar/Navbar.jsx";
import MainNavbar from "./Component/Header/MainNavbar/MainNavbar.jsx";
import DetailsProducts from "./Component/DetailsProduct/DetailsProducts.jsx";
import MainContent from "./Component/MainContent/MainContent.jsx";
import { DisplayContext } from "./Store/DisplayContext.js";
*/
import './App.css'
//import { Contact } from "./pages/Contact/Contact.jsx";
import { About } from "./pages/About/About.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import { Contact } from "./pages/Contact/Contact.jsx";

const App = () => {
/*
  const { pageShow } = useContext(DisplayContext);
  const nameRegex = /^[A-Za-z]{3}/;
  const emailRegex = /@gmail.com/;
  const ageRegex = /^[0-9]{11}/;
  const passwordRegex = /^[A-Z0-9a-z]/;  

 const UserData = JSON.parse(localStorage.getItem("UserData"))

    /*   
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
              <MainContac
          t />
            )}
          </>
        )}
      </>
    </>
  );
*/

return ( <>
<nav className="nav navbar navbar-expand-lg pt-3">
  <div className="container-fluid">
    <p className="navbar-brand text-ligh" >Navbar</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <p className="nav-link active text-ligh">Home</p>
        </li>
        <li className="nav-item">
          <p className="nav-link text-ligh">Link</p>
        </li>
   
        <li className="nav-item">
          <p className="nav-link text-ligh">Disabled</p>
        </li>
      </ul>


      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<Contact/>
<Footer/>
</>
)
};

export default App;


