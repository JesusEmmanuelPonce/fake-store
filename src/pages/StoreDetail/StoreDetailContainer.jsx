import React, {
    useState,
    useEffect,
} from 'react'
import { useParams } from 'react-router-dom';

import axiosClient from '../../helpers/axiosClient';
import StoreDetail from './StoreDetail';

const StoreDetailContainer = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {

        const getOneProduct = async() => {
            const { data } = await axiosClient.get(`/products/${id}`);

            console.log(data)

            setProduct(data)
        };

        getOneProduct();
      
    }, []);

  return (
    <StoreDetail
        delegations={{
            product,
        }}
    />
  )
};

export default StoreDetailContainer;