import React, { useEffect, useState } from 'react';
import axiosClient from '../../helpers/axiosClient';

import Store from './Store';

const StoreContainer = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    const getProducts = async() => {
      const { data } = await axiosClient.get("/products");

      setProducts(data);
    };

    getProducts();
    
  }, []);

  return (
    <Store
      delegations={{
        products,
      }}
    />
  )
};

export default StoreContainer;