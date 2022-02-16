import React    from 'react'

import Product from '../../components/Product/Product';
import "./styles.scss";

const Store = ({
  delegations: {
    products,
  }
}) => {

  console.log(products);

  return (
    <section className="container store">
      <div className="row">
        {products.map(product => (
          <div className="col-lg-3 col-sm-6 col-12 mt-4">
            <Product
              key={product?.id}
              product={product}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Store