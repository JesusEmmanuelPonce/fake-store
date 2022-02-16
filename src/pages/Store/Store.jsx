import React from 'react'
import CustomSkeleton from '../../components/CustomSkeleton';

import Product from '../../components/Product/Product';
import "./styles.scss";

const Store = ({
  delegations: {
    products,
  }
}) => {

  return (
    <section className="container store">
      <h1>Store</h1>
      <div className="row">
        {!products.length < 1 ?
          products.map(product => (
            <div
              key={product?.id}
              className="col-lg-3 col-sm-6 col-12 mt-4"
            >
              <Product
                product={product}
              />
            </div>
          )) : <CustomSkeleton />
        }
      </div>
    </section>
  )
}

export default Store