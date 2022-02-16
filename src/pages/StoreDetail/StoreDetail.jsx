import React  from "react";
import Rating from '@mui/material/Rating';

import currencyFormat  from "../../helpers/currencyFormat";
import ProductSkeleton from "../../components/ProductSkeleton";
import "./styles.scss";

const StoreDetail = ({
	delegations: {
		product,
		nagivate,
	}
}) => {    

  return (
    <section className="storeDetail">
			{
				product ? 
				<>
					<h2 className="storeDetail__title">
							Product detail
					</h2>
					<span onClick={() => nagivate(-1)}> {"<"} Back</span>
					<div className="storeDetail__product">
							<div className="storeDetail__product-img">
									<img src={product?.image} alt="" />
							</div>
							<div className="storeDetail__product-detail">
									<label>Name</label>
									<p> { product?.title } </p>

									<label>Price</label>
									<p> { currencyFormat(product?.price) } </p>

									<label>Description</label>
									<p> { product?.description } </p>

									<label>Category</label>
									<p> { product?.category } </p>

									<label>Rate</label>
									<br />
									<Rating value={Math.round(product?.rating?.rate)} readOnly />
							</div>
					</div>
				</> : <ProductSkeleton />
			}
    </section>
  )
}

export default StoreDetail;