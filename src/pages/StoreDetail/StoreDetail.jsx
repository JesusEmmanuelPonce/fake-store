import React from "react";

import currencyFormat from "../../helpers/currencyFormat";
import "./styles.scss";

const StoreDetail = ({
    delegations: {
        product,
    }
}) => {    

  return (
    <section className="storeDetail">
        <div className="storeDetail__product">
            <div className="storeDetail__product-img">
                <img src={product?.image} alt="" />
            </div>
            <div className="storeDetail__product-detail">
                <p> { product?.title } </p>
                <p> { currencyFormat(product?.price) } </p>
                <p> { product?.description } </p>
                <p> { product?.category } </p>
                <p> { product?.rating?.rate } </p>
            </div>
        </div>
    </section>
  )
}

export default StoreDetail