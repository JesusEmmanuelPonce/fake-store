import React      from 'react'
import { Outlet } from 'react-router-dom';

import Nav from '../../components/Nav';
import "./styles.scss";

const Store = () => {
	return (
		<>
			<Nav />
			<Outlet/>
		</>
	)
}

export default Store;