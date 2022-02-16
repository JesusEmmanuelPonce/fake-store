import React from 'react'
import { Outlet } from 'react-router-dom';

import Nav    from '../../components/Nav';
import Footer from '../../components/Footer';
import "./styles.scss";

const Store = () => {
	return (
		<>
			<Nav />
			<Outlet/>
			<Footer />
		</>
	)
}

export default Store;