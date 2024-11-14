import React, { useContext } from "react";
import Style from "./MainContent.module.css";
//import imgMeal from "../../images/img-meal.jpg";
import { CartContext } from "../../Store/CartContext.js";
import Button from "../Ui/Button.jsx";
import { useHttp } from "../../Hook/usehttp.js";
import Error from "../Error/Error.jsx";
import { DetailsProductContext } from "../../Store/DetailsProductContext.js";
import { currencyFormatter } from "../../Logic/logic.js";
const requestConfig = {};
const MainContent = () => {
  const { addProduct } = useContext(CartContext);
  const { getProductId, handleShowDetailsProduct } = useContext(
    DetailsProductContext
  );
  const { data, isLoading, error } = useHttp(
    "https://fakestoreapi.com/products",
    "Get",
    requestConfig,
    []
  );
  
  const handleClickOnButtonDetails = (product, show) => {
    getProductId(product);
    handleShowDetailsProduct(show);
  };
  return (
    <>
      {isLoading ? (
        <h1
          className={`${Style.loading} position-fixed d-flex justify-content-center align-items-center 
          bg-main rounded-3 text-white w-100 h-100`}
        >
          Loading...
        </h1>
      ) : (
        <>
          {error === undefined ? (
            <div className={`d-flex flex-wrap justify-content-center`}>
              {data.length !== 0 &&
                data.map((product) => (
                  <div className={`${Style.products} rounded-1 ps-2`} key={product.id}>
                    <img
                      src={product.image}
                      alt={product.title}
                      height={300}
                      className={`${Style.imageProduct} w-100 p-4`}
                    />
                    <h2 className="fs-6">{product.category}</h2>
                    <h4>{currencyFormatter.format(product.price)}</h4>
                    <p className="paragraph">{product.title}</p>
                    <Button
                      className={`sub-color bg-main`}
                      onClick={() => addProduct(product)}
                    >
                      buy
                    </Button>
                    <Button
                      className={Style.btnDetails}
                      onClick={() => handleClickOnButtonDetails(product, true)}
                    >
                      details
                    </Button>
                  </div>
                ))}
            </div>
          ) : (
            <Error error={error} />
          )}
        </>
      )}
    </>
  );
};
export default MainContent;
