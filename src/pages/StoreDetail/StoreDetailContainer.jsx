import {
	useState,
	useEffect,
} from 'react'
import {
	useParams,
	useNavigate,
} from 'react-router-dom';

import axiosClient from 'helpers/axiosClient';
import StoreDetail from './StoreDetail';

const StoreDetailContainer = () => {

	const { id }   = useParams();
	const nagivate = useNavigate();

	const [product, setProduct] = useState(null);

	useEffect(() => {

		// Get one product
		const getOneProduct = async() => {
			const { data } = await axiosClient.get(`/products/${id}`);

			setProduct(data)
		};

		getOneProduct();
		
	}, []);

  return (
    <StoreDetail
			delegations={{
				product,
				nagivate,
			}}
    />
  )
};

export default StoreDetailContainer;