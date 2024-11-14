import React from "react";
import Style from "./MainNavbar.module.css";
import { useContext } from "react";
import { CartContext } from "../../../Store/CartContext";
import UserProgressContext from "../../../Store/UserProgressContext";
import { DetailsProductContext } from "../../../Store/DetailsProductContext";
const MainNavbar = () => {
  const { item } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);
  const { handleShowDetailsProduct} = useContext(DetailsProductContext);
  const totalCartItems = item.reduce((totalNumberOfItems , CartItem) => {
    return totalNumberOfItems + CartItem.quantity ;
  }, 0);
  return (
    <nav className={`${Style.MainNavbar} bg-main w-100 position-fixed p-2 sub-color`}>
      <ul className="d-flex justify-content-between px-4 ">
        <li className={`${Style.navbarText}`} onClick={()=>handleShowDetailsProduct(false)}>
          products
        </li>
        <li className={`${Style.navbarText} sub-color`} onClick={() => showCart()}>
          Cart {totalCartItems}
        </li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
