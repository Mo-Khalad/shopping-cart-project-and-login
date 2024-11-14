import Style from "./Navbar.module.css";
import Button from "../../Ui/Button.jsx";
import { useContext } from "react";
//import { RejexContext } from "../../../Store/RejexContext.js";
import { DisplayContext } from "../../../Store/DisplayContext.js";
function Navbar({ open }) { 
    const DisplayCrx= useContext(DisplayContext)  
    return (
    <>
      <nav className={`${Style.navLinks} ${open} rounded-3 position-fixed end-0 top-0 pt-2`}>
        <Button
          className={`${DisplayCrx.showLogin ? "bg-main sub-color" : `${Style.btnClickedStyle} main-color`}`}
          onClick={()=>{
            DisplayCrx.handleShowLogin()
            DisplayCrx.hideError()
          }}
        >
          Login
        </Button>
        <Button
          className={`${!DisplayCrx.showLogin ? "bg-main sub-color" : `${Style.btnClickedStyle} main-color`}`}
          onClick={()=>{
            DisplayCrx.handleHideLogin()
            DisplayCrx.hideError()
          }
          }
        >
          Register
        </Button>
      </nav>
    </>
  );
}

export default Navbar;
