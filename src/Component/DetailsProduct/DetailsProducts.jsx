import React, { useContext } from "react";
import { DetailsProductContext } from "../../Store/DetailsProductContext";
import Button from "../Ui/Button.jsx";
import { CartContext } from "../../Store/CartContext.js";
import { currencyFormatter } from "../../Logic/logic.js";
const DetailsProducts = () => {
  const { productId } = useContext(DetailsProductContext);
  const { addProduct } = useContext(CartContext);
  const productPrice = currencyFormatter.format(productId.price);
  return (
    <div className="pt-5 d-flex justify-content-around">
        <>
          <div className="mt-5 ms-4">
            <img
              src={productId.image}
              alt={productId.title}
              width={400}
              height={300}
            />
          </div>
          <div className="w-50 mt-5">
            <h2 className="main-color">{productId.category}</h2>
            <h5 className="fs-6 main-color">{productId.title}</h5>
            <p>{productId.description}</p>
            <h4>{productPrice}</h4>
            <Button
              className="bg-main text-white fs-5"
              onClick={() => addProduct(productId)}
            >
              buy
            </Button>
          </div>
        </>
    </div>
  );
};
export default DetailsProducts;
