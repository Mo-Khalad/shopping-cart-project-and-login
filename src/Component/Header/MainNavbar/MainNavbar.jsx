import React from "react";
import Style from "./MainNavbar.module.css";
import { useContext } from "react";
import { CartContext } from "../../../Store/CartContext";
import { DisplayContext } from "../../../Store/DisplayContext";
const MainNavbar = () => {
  const { item, removeAll } = useContext(CartContext);
  const DisplayCrx = useContext(DisplayContext);
  const totalCartItems = item.reduce((totalNumberOfItems, CartItem) => {
    return totalNumberOfItems + CartItem.quantity;
  }, 0);

  const handleClickOnBtnLogOut = () => {
    localStorage.removeItem("UserData");
    DisplayCrx.handlePageShow("login");
    DisplayCrx.hideError();
    removeAll();
  };

  return (
    <nav
      className={`${Style.MainNavbar} bg-main w-100 position-fixed p-2 sub-color`}
    >
      <ul className="d-flex justify-content-between px-4 ">
        <li
          className={`${Style.navbarText}`}
          onClick={() => {
            DisplayCrx.handlePageShow("");
          }}
        >
          products
        </li>
        <li
          className={`${Style.navbarText} sub-color`}
          onClick={() => {
            DisplayCrx.handlePageShow(DisplayCrx.pageShow);
            DisplayCrx.handleModalShow("cart")
          }}
        >
          Cart {totalCartItems}
          </li>

        <li className={Style.btnLogOut} onClick={handleClickOnBtnLogOut}>
          logOut
        </li>
      </ul>
    </nav>
  );
};
export default MainNavbar;

