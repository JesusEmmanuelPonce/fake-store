import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import Product from '../../components/Product/Product';
import CustomSkeleton from '../../components/CustomSkeleton';
import "./styles.scss";

const Store = ({
  delegations: {
    products,
  }
}) => {

  const [order, setOrder] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQuantity(value);
  };

  const handleOrderChange = ({ target: { value } }) => {
    setOrder(value);
  };

  return (
    <section className="container store">
      <section className='store__filters d-flex justify-content-end'>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="quantity-label">Quantity</InputLabel>
          <Select
            labelId="quantity-label"
            id="quantity"
            value={quantity}
            label="Quantity"
            onChange={handleChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="quantity-label">Order</InputLabel>
          <Select
            labelId="quantity-label"
            id="quantity"
            value={order}
            label="Order"
            onChange={handleOrderChange}
          >
            <MenuItem value="asc">Asc</MenuItem>
            <MenuItem value="desc">Desc</MenuItem>
          </Select>
        </FormControl>
      </section>

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