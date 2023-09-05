import {
  useState,
  useEffect,
} from 'react';

import Store       from './Store';
import axiosClient from 'helpers/axiosClient';

const StoreContainer = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    // Get all products
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